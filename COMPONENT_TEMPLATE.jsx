/* COMPONENT TEMPLATE - Copy and adapt for all remaining components */

import React, { useState } from 'react';
import './css/components.css'; // Import shared styles

function MyNewComponent() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      setLoading(false);
      setFormData({});
    } catch (err) {
      setError(err.message || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Component Title</h1>
        <p className="page-subtitle">Brief description of what this page does</p>
      </div>

      {/* Alerts */}
      {error && <div className="alert alert-error">{error}</div>}

      {/* Two-column layout */}
      <div className="dashboard-content">
        
        {/* Main Content */}
        <div className="content-card">
          <div className="content-card-header">
            <h3 className="content-card-title">Data/List</h3>
            <a href="#" className="content-card-action">Export →</a>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <span className="badge badge-pending">Pending</span>
                    </td>
                    <td>
                      <button className="btn btn-secondary btn-small">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="content-card">
          <div className="content-card-header">
            <h3 className="content-card-title">Quick Stats</h3>
          </div>
          <div className="grid grid-1">
            <div style={{ textAlign: 'center', padding: 'var(--sp-lg)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: 'var(--sp-sm)' }}>24</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Total Items</div>
            </div>
          </div>
        </div>

      </div>

      {/* Form Section */}
      <div className="content-card mt-lg">
        <div className="content-card-header">
          <h3 className="content-card-title">Add New Item</h3>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Multi-column form */}
          <div className="form-row">
            <div className="form-group">
              <label>Field 1</label>
              <input
                type="text"
                name="field1"
                value={formData.field1 || ''}
                onChange={handleChange}
                placeholder="Enter value"
              />
            </div>
            <div className="form-group">
              <label>Field 2</label>
              <input
                type="text"
                name="field2"
                value={formData.field2 || ''}
                onChange={handleChange}
                placeholder="Enter value"
              />
            </div>
          </div>

          {/* Full-width field */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>

          {/* Select field */}
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category || ''}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="cat1">Category 1</option>
              <option value="cat2">Category 2</option>
            </select>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 'var(--sp-md)', marginTop: 'var(--sp-lg)' }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button type="reset" className="btn btn-secondary">
              Clear
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default MyNewComponent;

/* ========================
   CSS FILE: components.css
   ========================

   Import existing shared styles:
   - .card, .btn, .badge, .form-group, .table-wrapper
   - .alert, .grid, .dashboard-page
   - All animations and utilities
   
   Define component-specific styles only:
*/

// Example component-specific CSS additions:
/*
.my-component-specific {
  background: var(--card-bg);
  padding: var(--sp-lg);
}

.my-component-specific:hover {
  border-color: var(--warm-accent);
  transition: all var(--transition-base);
}

@media (max-width: 768px) {
  .my-component-specific {
    padding: var(--sp-md);
  }
}
*/

/* ========================
   IMPLEMENTATION CHECKLIST
   ========================

   For NewOrder component (example):
   ✅ Convert from Form.create (Ant) to plain React hooks
   ✅ Replace Ant Design Row/Col with CSS Grid
   ✅ Use .card for panels
   ✅ Use .btn .btn-primary for action buttons
   ✅ Use .badge for status indicators
   ✅ Use .table-wrapper and .table for lists
   ✅ Add form validation with error states
   ✅ Add loading states during API calls
   ✅ Add success/error alerts
   ✅ Responsive grid layout
   ✅ Smooth animations on load
   ✅ Remove all Ant Design imports
   ✅ Test hover states
   ✅ Test mobile layout
   ✅ Ensure accessible button labels

   For Each Component:
   - addEmployee.js → Use form-row grid, form-group styling
   - allEmployee.js → Use .table-wrapper with .table styling
   - AddDish.js → Use .content-card layout
   - AddItem.js → Use form-row and badge for status
   - Newpurse.js → Use grid grid-2 for layout
   - supplier-form.js → Use form-group and form-row
   - suppliertable.js → Use .table-wrapper styling
   - table.js → Reusable wrapper with .table styling
   - kitchen.js → Use stat-card grid layout
   - Nonpaidorder.js → Use table with status badges
*/ 