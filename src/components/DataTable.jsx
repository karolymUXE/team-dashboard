import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import PropTypes from 'prop-types'

function DataTable({ data, columns, onEdit, onDelete, type }) {
  const handleEditClick = (item) => {
    onEdit(item);
  };

  const handleDeleteClick = (item) => {
    onDelete(item);
  };

  const handleViewClick = (item) => {
    window.location.href = `/${type}/${item.id}`;
  };

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.header}</TableCell>
            ))}
            {(onEdit || onDelete) &&
              <TableCell>Actions</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow hover key={index}>
              {columns.map((column) => (
                <TableCell key={`${item.id}-${column.field}`} onClick={() => handleViewClick(item)}>{item[column.field]}</TableCell>
              ))}
              {(onEdit || onDelete) &&
                <TableCell sx={{width: '112px'}}>
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
  type: PropTypes.string,
}

export default DataTable