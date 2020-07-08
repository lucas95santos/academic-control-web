import React from 'react';
// icons
import { FiXCircle } from 'react-icons/fi';
// styles
import { TableContainer, Table } from './styles';

const LastActions: React.FC = () => {
    return (
        <TableContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>03/07/2020</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td>
                            <FiXCircle />
                        </td>
                    </tr>
                    <tr>
                        <td>03/07/2020</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td>
                            <FiXCircle />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </TableContainer>
    );
}

export default LastActions;
