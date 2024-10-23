import React, { useState, useEffect } from 'react'
import { FiUsers, FiBriefcase, FiImage, FiUserCheck } from 'react-icons/fi'
import { FiFilter, FiSettings } from 'react-icons/fi'
import { FaQuestionCircle } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

const contacts = [
  { name: 'harry', image: 'https://d3hquexcimrmu6.cloudfront.net/assets/sprites/logos/makerble-mini-logo-transparent-2e543d506b626dfda97d5ae54c54d174d345de3cfc9ec3105c6124e90c018667.png' },
  { name: 'syamadit', image: 'https://d3hquexcimrmu6.cloudfront.net/assets/sprites/logos/makerble-mini-logo-transparent-2e543d506b626dfda97d5ae54c54d174d345de3cfc9ec3105c6124e90c018667.png' },
  { name: 'Claire', image: 'https://d3hquexcimrmu6.cloudfront.net/assets/sprites/logos/makerble-mini-logo-transparent-2e543d506b626dfda97d5ae54c54d174d345de3cfc9ec3105c6124e90c018667.png' },
]

const projects = [
  { name: '4359 test' },
  { name: 'a test 5146' },
  { name: 'A Training Project' },
]

const albums = [
  { name: '2021 Portfolio' },
  { name: 'All Partners' },
  { name: 'Big Lottery Fund', image: '/placeholder.svg?height=40&width=40' },
]

const organizations = [
  { name: 'An Organisation Demo', role: 'Admin', image: '/placeholder.svg?height=40&width=40' },
  { name: 'A Showcase International Development Education Charity', role: 'Member', image: '/placeholder.svg?height=40&width=40' },
  { name: 'Oak Tree Secondary School', role: 'Admin', image: '/placeholder.svg?height=40&width=40' },
]

export default function Component() {
  const [activeSection, setActiveSection] = useState(null)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="relative min-h-screen pb-16 md:pb-0">
      <div className="w-full max-w-md mx-auto space-y-6 p-4">
        {activeSection === 'contacts' && (
          <Section 
            title="Contacts" 
            count={15} 
            newItemLabel="New Contact" 
            icon={<FiUsers />}
            onClose={() => setActiveSection(null)}
          >
            {contacts.map((contact, index) => (
              <ContactItem key={index} name={contact.name} image={contact.image} />
            ))}
          </Section>
        )}

        {activeSection === 'projects' && (
          <Section 
            title="Projects" 
            newItemLabel="New Project" 
            icon={<FiBriefcase />}
            onClose={() => setActiveSection(null)}
          >
            {projects.map((project, index) => (
              <ProjectItem key={index} name={project.name} />
            ))}
          </Section>
        )}

        {activeSection === 'albums' && (
          <Section 
            title="Albums" 
            newItemLabel="New Album" 
            icon={<FiImage />}
            onClose={() => setActiveSection(null)}
          >
            {albums.map((album, index) => (
              <AlbumItem key={index} name={album.name} image={album.image} />
            ))}
          </Section>
        )}

        {activeSection === 'organizations' && (
          <Section 
            title="Organisations" 
            showCount={false}
            onClose={() => setActiveSection(null)}
          >
            {organizations.map((org, index) => (
              <OrganizationItem key={index} name={org.name} role={org.role} image={org.image} />
            ))}
          </Section>
        )}

        {activeSection === 'followers' && (
          <Section 
            title="Followers" 
            showCount={false}
            onClose={() => setActiveSection(null)}
          />
        )}
      </div>

      {/* Mobile Bottom Navbar */}
      <nav className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <button onClick={() => toggleSection('contacts')} className="text-blue-600 flex flex-col items-center">
          <FiUsers size={24} />
          <span className="text-xs mt-1">Contacts</span>
        </button>
        <button onClick={() => toggleSection('projects')} className="text-blue-600 flex flex-col items-center">
          <FiBriefcase size={24} />
          <span className="text-xs mt-1">Projects</span>
        </button>
        <button onClick={() => toggleSection('albums')} className="text-blue-600 flex flex-col items-center">
          <FiImage size={24} />
          <span className="text-xs mt-1">Albums</span>
        </button>
        <button onClick={() => toggleSection('organizations')} className="text-blue-600 flex flex-col items-center">
          <FiBriefcase size={24} />
          <span className="text-xs mt-1">Orgs</span>
        </button>
        <button onClick={() => toggleSection('followers')} className="text-blue-600 flex flex-col items-center">
          <FiUserCheck size={24} />
          <span className="text-xs mt-1">Followers</span>
        </button>
      </nav>
    </div>
  )
}

function Section({ title, count, children, newItemLabel, showCount = true, icon, onClose }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 fixed bottom-16 left-4 right-4 max-h-[80vh] overflow-y-auto z-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-blue-600">{icon}</span>}
          <h2 className="text-lg font-semibold text-blue-600">{title}</h2>
          {showCount && <span className="text-gray-500">({count})</span>}
          {title === "Contacts" && (
            <>
              <FiFilter className="text-blue-600 cursor-pointer" />
              <FaQuestionCircle className="text-blue-600 cursor-pointer" />
            </>
          )}
        </div>
        <button onClick={onClose} className="text-gray-500">&times;</button>
      </div>
      {newItemLabel && (
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center mb-4">
          <IoMdAdd className="mr-1" /> {newItemLabel}
        </button>
      )}
      <div className="space-y-3">
        {children}
      </div>
      <div className="mt-4 text-right">
        <a href="#" className="text-blue-600 text-sm hover:underline">Show All</a>
      </div>
    </div>
  )
}

function ContactItem({ name, image }) {
  return (
    <div className="flex items-center space-x-3">
      <img src={image} alt={name} className="w-10 h-10 rounded-md object-cover" />
      <span className="text-gray-700">{name}</span>
    </div>
  )
}

function ProjectItem({ name }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
          <FiBriefcase className="text-gray-500" />
        </div>
        <span className="text-gray-700">{name}</span>
      </div>
      <FiSettings className="text-gray-400 cursor-pointer" />
    </div>
  )
}

function AlbumItem({ name, image }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {image ? (
          <img src={image} alt={name} className="w-10 h-10 rounded-md object-cover" />
        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
            <FiImage className="text-gray-500" />
          </div>
        )}
        <span className="text-gray-700">{name}</span>
      </div>
      <FiSettings className="text-gray-400 cursor-pointer" />
    </div>
  )
}

function OrganizationItem({ name, role, image }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-md object-cover" />
        <div>
          <span className="text-gray-700">{name}</span>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <FiSettings className="text-gray-400 cursor-pointer" />
    </div>
  )
}