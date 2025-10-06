import React from "react";
import Head from "next/head";
import NewNavbar from "../../components/NewNavbar";
import FooterWithContact from "../../components/FooterWithContact";
import Pattern from "../../components/Pattern";
import ArticleRenderer from "../../components/ArticleRenderer";
import articleData from "../../data/articles/meeting-scheduling-outsourcing.json";

const MeetingSchedulingOutsourcingPage = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Head>
        <title>{articleData.metadata.seo.title}</title>
        <meta
          name="description"
          content={articleData.metadata.seo.description}
        />
        <meta name="keywords" content={articleData.metadata.seo.keywords} />
        <meta property="og:title" content={articleData.metadata.seo.title} />
        <meta
          property="og:description"
          content={articleData.metadata.seo.description}
        />
        <meta
          property="og:url"
          content={`https://upsaleil.com/articles/${articleData.id}`}
        />
        <meta property="og:site_name" content="Upsale" />
        <meta property="og:image" content={articleData.metadata.image} />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:type" content="article" />
        <link
          rel="canonical"
          href={`https://upsaleil.com/articles/${articleData.id}`}
        />
      </Head>

      <NewNavbar />

      {/* כותרת המאמר */}
      <div className="relative text-white py-16 px-6 lg:px-24 overflow-hidden">
        <Pattern />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            {articleData.title}
          </h1>
        </div>
      </div>

      {/* תוכן המאמר */}
      <div className="py-16 px-6 lg:px-24">
        <ArticleRenderer articleData={articleData} />
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#001c55] mb-4">
            רוצה לחסוך זמן ולהתמקד במה שאתה עושה הכי טוב?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            צור קשר עוד היום ותן לנו לדאוג לתיאום הפגישות שלך בזמן שאתה מתמקד
            בסגירת עסקאות.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg shadow-lg hover:brightness-110 transition"
            style={{
              background: "linear-gradient(to right, #FAD02C , #FFD54F)",
              color: "#001c55",
            }}
            aria-label="לשיחת ייעוץ ומידע נוסף"
          >
            לשיחת ייעוץ ומידע נוסף
          </a>
        </div>
      </div>

      <FooterWithContact />
    </div>
  );
};

export default MeetingSchedulingOutsourcingPage;
