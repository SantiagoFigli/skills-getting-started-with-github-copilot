import React from 'react';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* ...existing code... */}
      {/* Participants Section */}
      <div className="participants-section" style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <h4 style={{
          margin: '0 0 0.5rem 0',
          fontSize: '1.1rem',
          color: '#2563eb',
          fontWeight: 600
        }}>Participants</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155' }}>
            {activity.participants.map((p, idx) => (
              <li key={idx} style={{ marginBottom: '0.25rem' }}>
                <span style={{
                  display: 'inline-block',
                  background: '#e0e7ff',
                  borderRadius: '4px',
                  padding: '0.15em 0.6em',
                  fontSize: '0.97em'
                }}>{p}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ color: '#64748b', fontStyle: 'italic' }}>No participants yet.</div>
        )}
      </div>
      {/* ...existing code... */}
    </div>
  );
};

export default ActivityCard;