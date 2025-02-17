import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../utils/api";
import MainTemplate from "../../components/templates/MainTemplate";

interface NewsArticle {
  title: string;
  link: string;
  source: { name: string };
  snippet: string;
  thumbnail: string;
}

export default function News() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await API.get("/news");
        console.log(response);

        setNews(response.data || []);
      } catch (err) {
        console.log(err);

        setError("Gagal memuat berita. Coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <MainTemplate pageTitle="News Pets || ur petcares">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Latest Pet News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {article.thumbnail && (
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-600 mt-2">{article.snippet}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainTemplate>
  );
}
