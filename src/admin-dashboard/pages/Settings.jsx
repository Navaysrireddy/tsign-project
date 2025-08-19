import React, { useState } from 'react';
import {
  UserIcon,
  BellIcon,
  ShieldIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  SaveIcon,
  GlobeIcon,
  MailIcon
} from 'lucide-react';

const styles = `
.settings-root {
  font-family: 'Segoe UI', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.settings-h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 0.5em;
}
@media (min-width: 768px) { .settings-h1 { font-size: 2.25rem; } }

.settings-flex {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .settings-flex { flex-direction: row; }
}

.settings-sidebar {
  width: 100%;
  max-width: 16rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  padding: 1rem;
  height: fit-content;
}

.settings-nav-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.6em 0.75em;
  border: none;
  border-radius: 0.5em;
  text-align: left;
  background: none;
  margin-bottom: 0.2em;
  cursor: pointer;
  color: #3b4252;
  transition: background 0.2s, color 0.2s;
  font-size: 1em;
}
.settings-nav-btn.active {
  background: #bee3f8;
  color: #2563eb;
}
.settings-nav-btn.inactive:hover {
  background: #f1f5f9;
}
.settings-nav-btn svg {
  margin-right: 0.8em;
}
@media (max-width: 767px) {
  .settings-sidebar { max-width: 100%; }
}

.settings-main {
  flex: 1;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  padding: 2rem 1.5rem;
}

.settings-section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #22223b;
  margin-bottom: 1em;
}

.settings-profile-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .settings-profile-grid { grid-template-columns: 1fr 1fr; }
}

.settings-label {
  display: block;
  font-size: 0.95em;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.35em;
}

.settings-input,
.settings-select,
.settings-textarea {
  width: 100%;
  padding: 0.65em 0.9em;
  border-radius: 0.5em;
  border: 1px solid #e5e7eb;
  background: #f7fafc;
  color: #22223b;
  font-size: 1em;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
}
.settings-input:focus,
.settings-select:focus,
.settings-textarea:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 2px #60a5fa40;
}
.settings-textarea { min-height: 100px; resize: vertical; }

.settings-group {
  margin-bottom: 2rem;
}

.settings-profile-icon-pre {
  display: flex;
  align-items: center;
  background: #f1f5f9;
  padding: 0.75em;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border: 1px solid #e5e7eb;
  border-right: 0;
  color: #8b949e;
}
.settings-profile-icon-group {
  display: flex;
}
.settings-profile-icon-input {
  flex: 1;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Password show/hide eye */
.settings-eye-btn {
  position: absolute;
  right: 0.95em;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
  outline: none;
}

.settings-hint {
  background: #fef6e0;
  border-radius: 0.5em;
  padding: 1em;
  color: #ad8500;
  font-size: 0.97em;
}

.settings-switch-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;
  border-bottom: 1px solid #e5e7eb;
}
.settings-switch {
  position: relative;
  width: 2.7em;
  height: 1.4em;
  display: inline-block;
}
.settings-switch input {
  display: none;
}
.settings-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
  border-radius:1em;
  transition: 0.3s;
}
.settings-slider:before {
  position: absolute;
  content: "";
  height: 1.09em;
  width: 1.09em;
  left: 0.2em;
  bottom: 0.16em;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
}
.settings-switch input:checked + .settings-slider {
  background: #3b82f6;
}
.settings-switch input:checked + .settings-slider:before {
  transform: translateX(1.25em);
}

/* Privacy danger zone */
.settings-danger-zone {
  background: #fef2f2;
  padding: 1.15em 1em;
  border-radius: 0.5em;
}
.settings-danger-title {
  color: #b91c1c;
  font-weight: 500;
}
.settings-danger-text {
  color: #991b1b;
  margin-top: 0.3em;
  font-size: 0.98em;
}
.settings-danger-btns {
  display: flex;
  gap: 1em;
  margin-top: 1em;
}
.settings-danger-btn {
  background: #fca5a5;
  color: #b91c1c;
  font-weight: 500;
  font-size: 0.97em;
  padding: 0.5em 1.2em;
  border: none;
  border-radius: 0.35em;
  cursor: pointer;
  transition: background 0.2s;
}
.settings-danger-btn:hover {
  background: #f87171;
}

.settings-submit-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
}
.settings-submit-btn {
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  color: #fff;
  padding: 0.75em 2em;
  border: none;
  border-radius: 0.45em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}
.settings-submit-btn:hover {
  background: linear-gradient(90deg, #1d4ed8, #6d28d9);
}
.settings-submit-btn svg {
  margin-right: 0.5em;
}
`;

const ADMIN_ROLES = [
  { value: 'superadmin', label: 'Super Admin' },
  { value: 'admin', label: 'Admin' },
  { value: 'moderator', label: 'Moderator' }
];
const PERMISSIONS = [
  'Manage Users',
  'Manage Content',
  'Manage System Settings',
  'Access Reports'
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'admin@example.com',
    role: 'admin',
    department: 'IT',
    bio: 'System administrator and software architect.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notificationEmails: true,
    notificationCritical: true,
    systemAlerts: true,
    twoFactorAuth: false,
    permissions: ['Manage Users', 'Access Reports'],
    sessionTimeout: '60',
    dataSharing: 'minimal'
  });

  // Permission checkbox handler
  const handlePermissionChange = (perm, checked) => {
    setFormData(prev => {
      let nextPerms = prev.permissions.slice();
      if (checked) {
        if (!nextPerms.includes(perm)) nextPerms.push(perm);
      } else {
        nextPerms = nextPerms.filter(p => p !== perm);
      }
      return { ...prev, permissions: nextPerms };
    });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? e.target.checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Admin settings saved successfully!');
  };

  return (
    <div className="settings-root">
      <style>{styles}</style>
      <h1 className="settings-h1">Admin Settings</h1>
      <div className="settings-flex">
        {/* Sidebar */}
        <div className="settings-sidebar">
          <nav>
            <button
              onClick={() => setActiveTab('profile')}
              className={`settings-nav-btn ${activeTab === 'profile' ? 'active' : 'inactive'}`}
              type="button"
            >
              <UserIcon style={{ width: 20, height: 20 }} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`settings-nav-btn ${activeTab === 'password' ? 'active' : 'inactive'}`}
              type="button"
            >
              <LockIcon style={{ width: 20, height: 20 }} />
              <span>Password</span>
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`settings-nav-btn ${activeTab === 'notifications' ? 'active' : 'inactive'}`}
              type="button"
            >
              <BellIcon style={{ width: 20, height: 20 }} />
              <span>Notifications</span>
            </button>
            <button
              onClick={() => setActiveTab('permissions')}
              className={`settings-nav-btn ${activeTab === 'permissions' ? 'active' : 'inactive'}`}
              type="button"
            >
              <ShieldIcon style={{ width: 20, height: 20 }} />
              <span>Permissions</span>
            </button>
            <button
              onClick={() => setActiveTab('system')}
              className={`settings-nav-btn ${activeTab === 'system' ? 'active' : 'inactive'}`}
              type="button"
            >
              <GlobeIcon style={{ width: 20, height: 20 }} />
              <span>System</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="settings-main">
          <form onSubmit={handleSubmit}>
            {/* Admin Profile */}
            {activeTab === 'profile' && (
              <div className="settings-group">
                <h2 className="settings-section-title">Admin Profile</h2>
                <div className="settings-profile-grid">
                  <div>
                    <label htmlFor="firstName" className="settings-label">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="settings-input" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="settings-label">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="settings-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="settings-label">Email</label>
                    <div className="settings-profile-icon-group">
                      <span className="settings-profile-icon-pre">
                        <MailIcon style={{ width: 16, height: 16 }} />
                      </span>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="settings-input settings-profile-icon-input" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="role" className="settings-label">Role</label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange} className="settings-select">
                      {ADMIN_ROLES.map(r => <option value={r.value} key={r.value}>{r.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="department" className="settings-label">Department</label>
                    <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="settings-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="bio" className="settings-label">Bio</label>
                  <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} className="settings-textarea" rows={4}></textarea>
                </div>
              </div>
            )}

            {/* Password Settings */}
            {activeTab === 'password' && (
              <div className="settings-group">
                <h2 className="settings-section-title">Change Password</h2>
                <div style={{ position: 'relative', marginBottom: '1.5em' }}>
                  <label htmlFor="currentPassword" className="settings-label">
                    Current Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="currentPassword"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="settings-input"
                      style={{ paddingRight: '2.2em' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="settings-eye-btn"
                      tabIndex={-1}
                    >
                      {showPassword
                        ? <EyeOffIcon style={{ width: 20, height: 20 }} />
                        : <EyeIcon style={{ width: 20, height: 20 }} />}
                    </button>
                  </div>
                </div>
                <div style={{ marginBottom: '1.5em' }}>
                  <label htmlFor="newPassword" className="settings-label">New Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="settings-input"
                  />
                </div>
                <div style={{ marginBottom: '1.5em' }}>
                  <label htmlFor="confirmPassword" className="settings-label">Confirm New Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="settings-input"
                  />
                </div>
                <div className="settings-hint">
                  Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="settings-group">
                <h2 className="settings-section-title">Notification Preferences</h2>
                <div>
                  <div className="settings-switch-wrapper">
                    <div>
                      <h3 style={{ fontSize: '1.04em', fontWeight: 500, color: '#22223b' }}>Email Notifications</h3>
                      <p style={{ color: '#6b7280', fontSize: '0.97em' }}>Critical updates via email</p>
                    </div>
                    <label className="settings-switch">
                      <input
                        type="checkbox"
                        name="notificationEmails"
                        checked={formData.notificationEmails}
                        onChange={handleChange}
                      />
                      <span className="settings-slider"></span>
                    </label>
                  </div>
                  <div className="settings-switch-wrapper">
                    <div>
                      <h3 style={{ fontSize: '1.04em', fontWeight: 500, color: '#22223b' }}>Critical System Alerts</h3>
                      <p style={{ color: '#6b7280', fontSize: '0.97em' }}>Receive urgent alerts</p>
                    </div>
                    <label className="settings-switch">
                      <input
                        type="checkbox"
                        name="notificationCritical"
                        checked={formData.notificationCritical}
                        onChange={handleChange}
                      />
                      <span className="settings-slider"></span>
                    </label>
                  </div>
                  <div className="settings-switch-wrapper">
                    <div>
                      <h3 style={{ fontSize: '1.04em', fontWeight: 500, color: '#22223b' }}>System Updates</h3>
                      <p style={{ color: '#6b7280', fontSize: '0.97em' }}>Get notified about new features and downtimes</p>
                    </div>
                    <label className="settings-switch">
                      <input
                        type="checkbox"
                        name="systemAlerts"
                        checked={formData.systemAlerts}
                        onChange={handleChange}
                      />
                      <span className="settings-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Permissions Settings */}
            {activeTab === 'permissions' && (
              <div className="settings-group">
                <h2 className="settings-section-title">Permissions</h2>
                <div>
                  {PERMISSIONS.map(perm => (
                    <div key={perm} className="settings-switch-wrapper">
                      <div>
                        <h3 style={{ fontSize: '1em', fontWeight: 500, color: '#22223b' }}>{perm}</h3>
                      </div>
                      <label className="settings-switch">
                        <input
                          type="checkbox"
                          checked={formData.permissions.includes(perm)}
                          onChange={e => handlePermissionChange(perm, e.target.checked)}
                        />
                        <span className="settings-slider"></span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="settings-switch-wrapper">
                  <div>
                    <h3 style={{ fontSize: '1.04em', fontWeight: 500, color: '#22223b' }}>
                      Two-Factor Authentication
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.97em' }}>
                      Add an extra layer of security
                    </p>
                  </div>
                  <label className="settings-switch">
                    <input
                      type="checkbox"
                      name="twoFactorAuth"
                      checked={formData.twoFactorAuth}
                      onChange={handleChange}
                    />
                    <span className="settings-slider"></span>
                  </label>
                </div>
              </div>
            )}

            {/* System Settings */}
            {activeTab === 'system' && (
              <div className="settings-group">
                <h2 className="settings-section-title">System Preferences</h2>
                <div style={{ padding: '0.5em 0', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ marginBottom: '0.45em' }}>
                    <h3 style={{ fontSize: '1.04em', fontWeight: 500, color: '#22223b' }}>
                      Session Timeout
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.97em' }}>Auto logout after inactivity</p>
                  </div>
                  <select
                    name="sessionTimeout"
                    value={formData.sessionTimeout}
                    onChange={handleChange}
                    className="settings-select"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                    <option value="never">Never</option>
                  </select>
                </div>
                <div style={{ padding: '0.5em 0', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ marginBottom: '0.45em' }}>
                    <h3 style={{ fontSize: '1.04em', fontWeight: 500, color: '#22223b' }}>
                      Data Sharing
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.97em' }}>
                      Control what system data may be sent externally
                    </p>
                  </div>
                  <select
                    name="dataSharing"
                    value={formData.dataSharing}
                    onChange={handleChange}
                    className="settings-select"
                  >
                    <option value="none">None - Do not share system data</option>
                    <option value="minimal">Minimal - Anonymous error logs only</option>
                    <option value="moderate">Moderate - Include usage stats</option>
                    <option value="all">All - Share all data for better experience</option>
                  </select>
                </div>
                {/* Danger zone */}
                <div className="settings-danger-zone">
                  <h3 className="settings-danger-title">Danger Zone</h3>
                  <p className="settings-danger-text">
                    These actions affect the whole system. Please proceed with caution.
                  </p>
                  <div className="settings-danger-btns">
                    <button type="button" className="settings-danger-btn">
                      Reset System
                    </button>
                    <button type="button" className="settings-danger-btn">
                      Remove All Users
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button (for all tabs) */}
            <div className="settings-submit-row">
              <button type="submit" className="settings-submit-btn">
                <SaveIcon style={{ width: 16, height: 16 }} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
