import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const [expandedGroups, setExpandedGroups] = useState({
    orders: false,
    kitchen: false,
    accounting: false,
    stock: false,
    dish: false,
    employee: false
  });

  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavItem = ({ icon, label, to, badge }) => (
    <Link to={to} className={`nav-item ${isActive(to) ? 'active' : ''}`}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
      {badge && <span className="nav-badge">{badge}</span>}
    </Link>
  );

  const NavGroup = ({ title, items, groupKey }) => (
    <div className="nav-group">
      <div
        className="nav-group-title"
        onClick={() => toggleGroup(groupKey)}
        style={{ cursor: 'pointer' }}
      >
        {title}
      </div>

      <div style={{ display: expandedGroups[groupKey] ? 'block' : 'none' }}>
        {items}
      </div>
    </div>
  );

  return (
    <aside className="sidebar">

      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">🍽️</div>

        <div>
          <h2 className="sidebar-title">RestoHub</h2>
          <p className="sidebar-subtitle">Management</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        {/* Dashboard */}
        <div className="nav-group">
          <NavItem
            icon="📊"
            label="Dashboard"
            to="/dashboard"
          />
        </div>

        {/* Orders */}
        <NavGroup
          title="Orders"
          groupKey="orders"
          items={
            <React.Fragment>
              <NavItem
                icon="➕"
                label="New Order"
                to="/neworder"
              />

              <NavItem
                icon="📋"
                label="Non-Paid Orders"
                to="/nonpaidorder"
                badge="3"
              />

              <NavItem
                icon="✅"
                label="Completed"
                to="/orders-completed"
              />
            </React.Fragment>
          }
        />

        {/* Kitchen */}
        <NavGroup
          title="Kitchen"
          groupKey="kitchen"
          items={
            <React.Fragment>
              <NavItem
                icon="👨‍🍳"
                label="Live Kitchen"
                to="/kitchen"
                badge="2"
              />

              <NavItem
                icon="🔥"
                label="Active Orders"
                to="/kitchen-active"
              />
            </React.Fragment>
          }
        />

        {/* Stock */}
        <NavGroup
          title="Stock Management"
          groupKey="stock"
          items={
            <React.Fragment>
              <NavItem
                icon="📦"
                label="Add Item"
                to="/additem"
              />

              <NavItem
                icon="📬"
                label="New Purchase"
                to="/newpurse"
              />

              <NavItem
                icon="📊"
                label="Stock Overview"
                to="/stock-overview"
              />
            </React.Fragment>
          }
        />

        {/* Menu */}
        <NavGroup
          title="Menu Management"
          groupKey="dish"
          items={
            <React.Fragment>
              <NavItem
                icon="🍽️"
                label="Add Dish"
                to="/adddish"
              />

              <NavItem
                icon="📖"
                label="Menu Items"
                to="/all-dishes"
              />

              <NavItem
                icon="🏷️"
                label="Categories"
                to="/dish-categories"
              />
            </React.Fragment>
          }
        />

        {/* Suppliers */}
        <div className="nav-group">
          <NavItem
            icon="🚚"
            label="Suppliers"
            to="/supplier"
          />
        </div>

        {/* Accounting */}
        <NavGroup
          title="Accounting"
          groupKey="accounting"
          items={
            <React.Fragment>
              <NavItem
                icon="💰"
                label="Income"
                to="/accounting-income"
              />

              <NavItem
                icon="💸"
                label="Expenses"
                to="/accounting-expenses"
              />

              <NavItem
                icon="📊"
                label="Reports"
                to="/accounting-reports"
              />
            </React.Fragment>
          }
        />

        {/* Staff */}
        <NavGroup
          title="Staff"
          groupKey="employee"
          items={
            <React.Fragment>
              <NavItem
                icon="👤"
                label="Add Employee"
                to="/addemployee"
              />

              <NavItem
                icon="👥"
                label="All Employees"
                to="/allemployee"
              />

              <NavItem
                icon="📋"
                label="Shifts"
                to="/employee-shifts"
              />
            </React.Fragment>
          }
        />

        {/* Tables */}
        <div className="nav-group">
          <NavItem
            icon="🪑"
            label="Table Management"
            to="/table-management"
          />
        </div>

      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="user-profile">

          <div className="user-avatar">JD</div>

          <div className="user-info">
            <p className="user-name">John Doe</p>
            <p className="user-role">Manager</p>
          </div>

          <button className="logout-btn" title="Logout">
            🚪
          </button>

        </div>
      </div>

    </aside>
  );
};

export default Sidebar;