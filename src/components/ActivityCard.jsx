import React from 'react';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* ...existing code... */}
      {/* Participants Section */}
      <div
        className="participants-section"
        style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
        }}
      >
        <h4
          style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.1rem',
            color: '#2563eb',
            fontWeight: 600
          }}
        >
          Participants
        </h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.4rem',
              color: '#334155',
              listStyleType: 'disc',
              fontSize: '1em'
            }}
          >
            {activity.participants.map((p, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: '0.3rem',
                  lineHeight: 1.5,
                  background: '#eef2ff',
                  borderRadius: '4px',
                  padding: '0.18em 0.7em',
                  display: 'inline-block',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                }}
              >
                {p}
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ color: '#64748b', fontStyle: 'italic' }}>
            No participants yet.
          </div>
        )}
      </div>
      {/* ...existing code... */}
    </div>
  );
};

export default ActivityCard;