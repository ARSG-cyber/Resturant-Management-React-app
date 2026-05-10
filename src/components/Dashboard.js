import React from "react";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";

const Dashboard = () => {
  // Sample data
  const stats = [
    {
      icon: "📊",
      label: "Total Orders",
      value: "1,245",
      change: "+12.5%",
      positive: true,
      link: "/neworder"
    },
    {
      icon: "🔥",
      label: "Active Orders",
      value: "23",
      change: "+4.2%",
      positive: true,
      link: "/neworder"
    },
    {
      icon: "👨‍🍳",
      label: "Kitchen Orders",
      value: "8",
      change: "-2.1%",
      positive: false,
      link: "/kitchen"
    },
    {
      icon: "💰",
      label: "Today's Revenue",
      value: "$3,245",
      change: "+8.9%",
      positive: true,
      link: "/accounting-income"
    }
  ];

  const recentOrders = [
    { id: 101, table: "Table 5", items: "3 items", status: "pending", time: "2 mins ago" },
    { id: 102, table: "Table 8", items: "5 items", status: "completed", time: "5 mins ago" },
    { id: 103, table: "Table 12", items: "2 items", status: "pending", time: "8 mins ago" },
    { id: 104, table: "Table 2", items: "4 items", status: "completed", time: "12 mins ago" }
  ];

  const activities = [
    { title: "New order #1245 created", time: "Just now" },
    { title: "Kitchen completed order #1244", time: "3 mins ago" },
    { title: "Payment received from Table 5", time: "5 mins ago" },
    { title: "New employee John added", time: "15 mins ago" }
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <Link to={stat.link} key={idx} style={{ textDecoration: 'none' }}>
              <div className="stat-card">
                <div className="stat-card-header">
                  <div className="stat-card-icon">{stat.icon}</div>
                </div>
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
                <div className={`stat-card-change ${stat.positive ? 'positive' : 'negative'}`}>
                  <span>{stat.change}</span>
                  <span>{stat.positive ? '↑' : '↓'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="dashboard-content">
        
        {/* Recent Orders */}
        <div className="content-card">
          <div className="content-card-header">
            <h3 className="content-card-title">Recent Orders</h3>
            <Link to="/neworder" className="content-card-action">View All →</Link>
          </div>
          <div className="order-list">
            {recentOrders.map((order, idx) => (
              <div key={idx} className="order-item">
                <div className="order-item-number">#{order.id}</div>
                <div className="order-item-info">
                  <div className="order-item-title">{order.table}</div>
                  <div className="order-item-meta">{order.items} • {order.time}</div>
                </div>
                <span className={`order-item-status ${order.status}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="content-card">
          <div className="content-card-header">
            <h3 className="content-card-title">Activity</h3>
          </div>
          <div className="activity-timeline">
            {activities.map((activity, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-content">
                  <div className="activity-title">{activity.title}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
