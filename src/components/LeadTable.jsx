import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {companyTemplate, contactTemplate, statusTemplate} from '../utils/templateHelpers';

const LeadTable = ({data}) => {
    return (
        <div className="card">
            <DataTable value={data} stripedRows>
                <Column field="id" header="ID" sortable/>
                <Column field="company.name" header="Company" body={companyTemplate} sortable/>
                <Column field="contactPerson.firstName" header="Contact" body={contactTemplate} sortable/>
                <Column field="email" header="Email" sortable/>
                <Column field="phone" header="Phone"/>
                <Column field="leadStatus" header="Status" body={statusTemplate} sortable/>
                <Column field="createdAt" header="Created" sortable/>
            </DataTable>
        </div>
    );
};

export default LeadTable;

