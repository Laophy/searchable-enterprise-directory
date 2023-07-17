import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

const columns = [
    { field: 'emp_id', headerName: 'ID', width: 70 },
    {
        field: 'full_name',
        headerName: 'Full name',
        width: 140
    },
    {
        field: 'job_role',
        headerName: 'Role',
        width: 165,
    },
    {
        field: 'work_location',
        headerName: 'Location',
        width: 130,
    },
    {
        field: 'phone_number',
        headerName: 'Phone',
        width: 130,
        renderCell: (params) => <p>{formatPhoneNumber(params.row.phone_number)}</p>
    },
    {
        field: 'manager_name',
        headerName: 'Reports To',
        width: 130,
    },
    {
        field: 'contact_emp',
        headerName: 'Contact',
        width: 130,
        renderCell: (params) => <Link to={`/users/${params.row.emp_id}`}><VisibilityIcon sx={{ textDecoration: 'none', color: 'black', textAlign: 'center' }} /></Link>
    }
];

export function DirectoryUserList() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4000/api/users/all`).then(res => res.json()).then((users) => {
            const newUsers = [];
            users.forEach(user => {
                const manager = users.find(emp => emp.emp_id === user.manager_id)
                user.manager_name = manager?.full_name;

                if (!user.manager_name)
                    user.manager_name = 'Alan D. Schnitzer';

                if (manager || user.manager_id === 0)
                    newUsers.push(user)
            })
            setUsers(newUsers)
            setFilteredUsers(newUsers)
        })
    }, [])

    // Update search / table when filtering
    useEffect(() => {
        const filtered = users.filter(user => user.full_name?.toLowerCase().includes(search))
        setFilteredUsers(filtered)
    }, [search])

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <TextField id="search-bar" label="Search Employee" variant="standard" sx={{ m: 1 }} onChange={(e) => setSearch(e.target.value)} />
            <DataGrid
                rows={filteredUsers}
                columns={columns}
                getRowId={(filteredUsers) => filteredUsers.emp_id}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 50, 100]}
            />
        </div>
    )
}