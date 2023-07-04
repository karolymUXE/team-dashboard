import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'
import PropTypes from 'prop-types'

function DataTable({ data, columns, onEdit, onDelete, onView }) {
  const handleEditClick = (item) => {
    onEdit(item);
  };

  const handleDeleteClick = (item) => {
    onDelete(item);
  };

  const handleViewClick = (item) => {
    onView(item);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.header}</TableCell>
            ))}
            {onEdit &&
              <TableCell>Actions</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={`${item.id}-${column.field}`}>{item[column.field]}</TableCell>
              ))}
              {(onEdit || onDelete || onView) &&
                <TableCell sx={{width: '152px'}}>
                  {onEdit && (
                    <IconButton onClick={() => handleEditClick(item)} aria-label="Edit">
                      <EditIcon />
                    </IconButton>
                  )}
                  {onDelete && (
                    <IconButton onClick={() => handleDeleteClick(item)} aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  )
                  }
                  {onView && (
                    <IconButton onClick={() => handleViewClick(item)} aria-label="View">
                      <VisibilityIcon />
                    </IconButton>
                  )}
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onView: PropTypes.func,
}

export default DataTable