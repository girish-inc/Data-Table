import React from 'react';
import {Tag} from 'primereact/tag';
import {formatFullName, getStatusSeverity} from './leadUtils';

// Company column template
export const companyTemplate = (rowData) => (
    <div>
        <div className="company-name">{rowData.company.name}</div>
        <div className="company-domain">{rowData.company.domain}</div>
    </div>
);

// Contact person column template
export const contactTemplate = (rowData) => formatFullName(rowData.contactPerson);

// Status column template with colored tag
export const statusTemplate = (rowData) => {
    const severity = getStatusSeverity(rowData.leadStatus);
    return <Tag value={rowData.leadStatus} severity={severity}/>;
};

