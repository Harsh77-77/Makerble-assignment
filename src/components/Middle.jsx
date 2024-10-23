import React from 'react'
import { FaHeart, FaEllipsisH } from 'react-icons/fa'

const posts = [
  {
    id: 1,
    author: 'Yael Adamson-Brown',
    avatar: '/placeholder.svg?height=40&width=40',
    timestamp: '4th Dec 2023',
    editedTimestamp: '1 day ago',
    content: 'New update by Yael Adamson-Brown working on the Using football to teach life skills to children for An Organisation Demo with Sofia',
    comments: 0,
    favorites: 0,
    label: 'Update'
  },
  {
    id: 2,
    author: 'Yael Adamson-Brown',
    avatar: '/placeholder.svg?height=40&width=40',
    timestamp: '4th Dec 2023',
    editedTimestamp: '1 day ago',
    content: 'New update by Yael Adamson-Brown working on the Using football to teach life skills to children for An Organisation Demo with Sofia',
    comments: 0,
    favorites: 0,
    label: 'Update'
  },
  {
    id: 3,
    author: 'Yael Adamson-Brown',
    avatar: '/placeholder.svg?height=40&width=40',
    timestamp: '4th Dec 2023',
    editedTimestamp: '1 day ago',
    content: 'New update by Yael Adamson-Brown working on the Using football to teach life skills to children for An Organisation Demo with Sofia',
    comments: 0,
    favorites: 0,
    label: 'Update'
  },
  {
    id: 4,
    author: 'Respondent',
    avatar: '/placeholder.svg?height=40&width=40',
    timestamp: '7th Dec 2023',
    editedTimestamp: '5 days ago',
    content: 'New update by Respondent working at Money Management starting at 14:30 on 28th November 2023 on Using football to teach life skills to children for An Organisation Demo with Ali Pasha',
    comments: 0,
    favorites: 0,
    label: 'Weekly Progress'
  },
  {
    id: 5,
    author: 'Yael Adamson-Brown',
    avatar: '/placeholder.svg?height=40&width=40',
    timestamp: '28th Nov 2023',
    editedTimestamp: '14 days ago',
    content: '1 milestone by Yael Adamson-Brown working on the Using music to deliver positive outcomes for vulnerable young people project for An Organisation Demo with Miguel Herrera',
    comments: 0,
    favorites: 0,
    label: 'Milestone'
  }
]

export default function Middle() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <NewPostInput />
      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">NEWSFEED</h2>
        <button className="text-blue-500 text-sm">
          Story Filters ▼
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <button className="w-full mt-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
        Load More
      </button>
    </div>
  )
}

function NewPostInput() {
  return (
    <div className="flex items-center space-x-2 bg-white p-3 rounded-md shadow">
      <input
        type="text"
        placeholder="Yael Adamson-Brown share some progress..."
        className="flex-grow p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
        Post
      </button>
    </div>
  )
}

function Post({ post }) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-semibold">{post.author}</h3>
            <div className="text-xs text-gray-500">
              <span>Activity happened on {post.timestamp}</span>
              <br />
              <span>Last edited at {post.editedTimestamp}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            {post.label}
          </span>
          <button className="text-gray-500 hover:text-gray-700">
            <FaEllipsisH />
          </button>
        </div>
      </div>
      <p className="mt-2 text-gray-700">{post.content}</p>
      <button className="mt-2 text-blue-500 text-sm hover:underline">
        Expand Story
      </button>
      <div className="mt-4 flex items-center justify-between">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
          <FaHeart />
          <span>Like</span>
        </button>
        <div className="text-sm text-gray-500">
          <span>{post.comments} Comments</span>
          <span className="mx-2">•</span>
          <span>{post.favorites} Favourites</span>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
        <input
          type="text"
          placeholder="Write a comment..."
          className="flex-grow p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
          Post
        </button>
      </div>
    </div>
  )
}