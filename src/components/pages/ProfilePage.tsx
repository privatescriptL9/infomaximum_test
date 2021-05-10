import React from 'react'
import '../../scss/components/pages/ProfilePage.scss'
import EditUserForm from '../EditUserForm'

const ProfilePage: React.FC = () => {
  return (
    <div className="ProfilePage">
      <div className="Profile-card">
        <EditUserForm />
      </div>
    </div>
  )
}

export default ProfilePage
