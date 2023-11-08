import React from "react";
import "./style.css";

function AboutUs() {
  return (
    <div id="about">
      <div className="About-us-section">
        <div className="main-heading">
          <h3 className="heading">About Us</h3>
          <h3 className="heading">معلومات عنا</h3>
        </div>

        <div className="inner-content">
          <div className="about-us-content">
            <p> We are a leading Saudi company with many years of experience</p>
            <p>
              supporting our clients across sectors and supporting the growth of
              the
            </p>
            <p>construction and development sector in Saudi Arabia</p>
            <br></br>
            <p>
              Hasad Holding has been a leading construction company in Saudi
            </p>
            <p>Arabia for 25 years, delivering over 400 million SAR worth of</p>
            <p>projects with our team of over 200 dedicated professionals. We take</p>
            <p>pride in our involvement in some of the country's most prestigious</p>
            <p>projects, including the Holy Mosque of Makkah and Medina, Hajj and</p>
            <p>Umrah's Project, King Abdullah Stadium, and Jeddah Airport</p>
          </div>

          <div className="about-us-content">
            <p>
              نحن شركة سعودية رائدة تتمتع بسنوات عديدة من الخبرة دعم عملائنا عبر
            </p>
            <p>
              {" "}
              القطاعات ودعم نمو قطاع البناء والتطوير في المملكة العربية السعودية
            </p>
            <br>
            </br>
            <p>تعد شركة حصاد القابضة شركة رائدة في مجال البناء في المملكة العربية</p>
            <p>السعودية لمدة 25 ً عاما، حيث قمنا بتسليم مشاريع بقيمة تزيد عن 4</p>
            <p>مليون ريال سعودي بفضل فريقنا المكون من أ كثر من 200 مهندس</p>
            <p>ومختص. نحن نفخر بمشاركتنا في بعض من أهم المشاريع في المملكة، بما</p>
            <p>في ذلك المسجد الحرام في مكة والمدينة المنورة، مشاريع الحج والعمرة</p>
            <p>استاد الملك عبدالله، مطار جدة والعديد من المشاريع الأخرى</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
