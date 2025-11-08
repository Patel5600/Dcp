import React, { useEffect, useState } from 'react';
type Post = { id: number; title: string; content: string; createdAt?: number };

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:4000';

  useEffect(() => {
    fetch(`${API}/api/forum/posts`).then(r => r.json()).then(setPosts).catch(console.error);
  }, []);

  const addPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    const res = await fetch(`${API}/api/forum/posts`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({title, content})
    });
    const p = await res.json();
    setPosts(prev => [p, ...prev]);
    setTitle(''); setContent('');
  };

  return (
    <div className="container py-4">
      <h2>Department Forum</h2>
      <form onSubmit={addPost} className="mb-3">
        <input className="form-control mb-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea className="form-control mb-2" placeholder="Content" rows={3} value={content} onChange={e=>setContent(e.target.value)} />
        <button className="btn btn-primary" type="submit">Post</button>
      </form>
      <div>
        {posts.map(p => (
          <div className="card mb-2" key={p.id}>
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">{p.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
