import React from "react";
import NewNavbar from "../../components/NewNavbar";
import FooterWithContact from "../../components/FooterWithContact";
import Pattern from "../../components/Pattern";
import ArticleRenderer from "../../components/ArticleRenderer";
import RelatedArticlesSection from "../../components/RelatedArticlesSection";
import articleData from "../../data/articles/sales-outsourcing-benefits.json";

export const metadata = {
  title: articleData.metadata.seo.title,
  description: articleData.metadata.seo.description,
  keywords: articleData.metadata.seo.keywords,
  openGraph: {
    title: articleData.metadata.seo.title,
    description: articleData.metadata.seo.description,
    url: `https://upsale.co.il/articles/${articleData.id}`,
    siteName: "Upsale",
    images: [
      {
        url: articleData.metadata.image,
        width: 1200,
        height: 630,
        alt: articleData.title,
      },
    ],
    locale: "he_IL",
    type: "article",
  },
  alternates: {
    canonical: `https://upsale.co.il/articles/${articleData.id}`,
  },
};

const SalesOutsourcingBenefitsPage = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
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
        <RelatedArticlesSection currentArticleId={articleData.id} />
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#001c55] mb-4">
            רוצה לדעת איך זה יכול לעבוד אצלך בעסק?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            דבר איתנו עוד היום ותן לנו להראות לך איך צוות מכירות חיצוני יכול
            לשנות את התמונה.
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

export default SalesOutsourcingBenefitsPage;
