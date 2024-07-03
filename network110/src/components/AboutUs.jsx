import React from "react";
import "../css/aboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="container about-us"
      id="about">
      <h1>معلومات عنا</h1>
      <div className="company-history">
        <div className="company-history-img">
          <img
            src="https://img.freepik.com/free-vector/business-infographic-with-photo_23-2148483320.jpg?t=st=1719940927~exp=1719944527~hmac=a172cda6b2764e7686863accf298b8467ce178245ce7660b218cc0c0c5d27d4a&w=1060"
            alt="company-history"
          />
        </div>
        <div className="company-history-wrapper">
          <h2>تاريخ الشركة</h2>
          <p>
            {/* Founded seven years ago, Network 110
            has grown into a trusted name in
            internet, network, and surveillance
            solutions across the Kingdom of Saudi
            Arabia (KSA). Over the years, we have
            built a strong reputation for
            delivering high-quality, reliable
            services that consistently meet the
            needs of our clients. Our commitment
            to excellence and customer
            satisfaction has earned us a loyal
            clientele, making us a preferred
            choice for homes, offices, hotels, and
            shops throughout the region. Our
            experienced team continues to drive
            innovation and uphold the highest
            standards in every project we
            undertake. */}
            تأسست شركة Network 110 قبل سبع سنوات،
            وتطورت لتصبح اسمًا موثوقًا به في مجال
            حلول الإنترنت والشبكات والمراقبة في
            جميع أنحاء المملكة العربية السعودية.
            على مر السنين، قمنا ببناء سمعة قوية
            لتقديم خدمات موثوقة وعالية الجودة تلبي
            باستمرار احتياجات عملائنا. لقد أكسبنا
            التزامنا بالتميز ورضا العملاء عملاء
            مخلصين، مما يجعلنا الخيار المفضل
            للمنازل والمكاتب والفنادق والمحلات
            التجارية في جميع أنحاء المنطقة. يواصل
            فريقنا ذو الخبرة قيادة الابتكار
            والالتزام بأعلى المعايير في كل مشروع
            نقوم به.
          </p>
        </div>
      </div>

      <div className="mission-statement">
        <div className="mission-statement-wrapper">
          <h2>بيان المهمة</h2>
          <p>
          مهمتنا في Network 110 هي:
            توفير إنترنت وشبكة استثنائية،
            وحلول المراقبة مصممة خصيصا ل
            تلبية الاحتياجات الفريدة لعملائنا.
            نحن ملتزمون بالتسليم
            خدمات موثوقة وعالية الجودة
            ضمان الاتصال السلس، وتعزيزها
            والأمن، وراحة البال. خلال
            التكنولوجيا المبتكرة والخبراء
            الحرفية، ونحن نسعى جاهدين لتجاوزها
            توقعات العملاء وتعزيزها
            علاقات طويلة الأمد مبنية على الثقة
            والرضا.
          </p>
        </div>
        <div className="mission-statement-img">
          <img
            src="https://img.freepik.com/free-vector/illustration-business-graph-analysis_53876-36925.jpg?uid=R153806790&ga=GA1.1.88436429.1719244827&semt=ais_user"
            alt="mission-statement-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
