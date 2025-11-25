// Get severity level for lead status
export const getStatusSeverity = (status) => {
    const severityMap = {
        'Qualified': 'success',
        'Contacted': 'info',
        'Pending': 'warning'
    };
    return severityMap[status];
};

// Format contact person full name
export const formatFullName = (contactPerson) => {
    return `${contactPerson.firstName} ${contactPerson.lastName}`;
};

