'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DynamicPage() {
  const params = useParams();
  const slug = params?.slug;
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pages/${slug}`);
        const data = await res.json();
        setPageData(data);
      } catch (err) {
        console.error('Failed to fetch page data:', err);
      }
    };

    if (slug) fetchPage();
  }, [slug]);

  if (!pageData) return <p className="text-center py-10">Loading...</p>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {pageData.components.map((comp, index) => {
        const { _id, type, props } = comp;

        switch (type.toLowerCase()) {
          case 'heading':
            return (
              <h1 key={_id} className="text-4xl font-bold text-gray-800">
                {props.content}
              </h1>
            );
          case 'subheading':
            return (
              <h3 key={_id} className="text-2xl font-semibold text-indigo-600">
                {props.content}
              </h3>
            );
          case 'paragraph':
            return (
              <p key={_id} className="text-gray-700 text-lg leading-relaxed">
                {props.content}
              </p>
            );
          case 'image':
            return (
              <img
                key={_id}
                src={props.content}
                alt={props.alt || 'Dynamic image'}
                className="w-full rounded-lg shadow-md"
              />
            );
          case 'list':
            return (
              <ul key={_id} className="list-disc list-inside space-y-2 text-gray-700">
                {props.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );
          case 'button':
            return (
              <Link
                key={_id}
                href={props.content.url}
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
              >
                {props.content.text}
              </Link>
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
