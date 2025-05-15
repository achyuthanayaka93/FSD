import React from 'react';

const issues = [
  {
    id: 1,
    title: 'Login not working',
    description: 'Users are unable to login with correct credentials.',
    status: 'Open',
  },
  {
    id: 2,
    title: 'UI bug on dashboard',
    description: 'Dashboard misaligned on smaller screens.',
    status: 'Closed',
  },
  {
    id: 3,
    title: 'Add dark mode',
    description: 'Dark mode is a popular request from users.',
    status: 'Open',
  },
];

const IssueList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Issue Tracker 🛠️</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <strong>Status:</strong> {issue.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
