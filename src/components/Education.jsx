import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">
        <span className="education-icon"><FaGraduationCap /></span> EDUCATION
      </h2>

      <div className="education-cards">

        <div className="education-card">
          <div className="card-inner">
            <div className="card-front">
              <h3 className="edu-institution">Rajarata University</h3>
              <p className="edu-degree">BSc in Health Promotion (Reading)</p>
              <div className="education-underline"></div>
            </div>
            <div className="card-back">
              <p>Currently pursuing a Bachelor's Degree in Health Promotion.</p>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="card-inner">
            <div className="card-front">
              <h3 className="edu-institution">Rajarata University</h3>
              <p className="edu-degree">Diploma in English (Reading)</p>
              <div className="education-underline"></div>

            </div>
            <div className="card-back">
              <p>Improving English proficiency with academic reading and communication focus.</p>
            </div>
          </div>
        </div>
        
{/* Ordinary Level Results */}
<div className="education-card">
          <div className="card-inner">
            <div className="card-front">
              <h3 className="edu-institution">V/Omanthai Central College</h3>
              <p className="edu-degree">GCE O/L Examination</p>
              <div className="education-underline"></div>

            </div>
            <div className="card-back">
              <p>Subjects & Grades</p>

              <div className="subjects">
                <span className="subject">Saivanery (T) (T)    :<span className="grade">A</span></span>
                <span className="subject">Lang. & Lit (T)   :<span className="grade">A</span></span>
                <span className="subject">English   :<span className="grade">S</span></span>
                <span className="subject">Science    :<span className="grade">C</span></span>
                <span className="subject">Mathematics:<span className="grade">B</span></span>
                <span className="subject">History:<span className="grade">A</span></span>
                <span className="subject">Music (Carnatic):  <span className="grade">A</span></span>
                <span className="subject">Geography: <span className="grade">C</span></span>
                <span className="subject">Inf. & Com. Tech :<span className="grade">C</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="card-inner">
            <div className="card-front">
              <h3 className="edu-institution">V/Omanthai Central College</h3>
              <p className="edu-degree">GCE A/L - Biology Stream</p>
              <div className="education-underline"></div>

            </div>
            <div className="card-back">
              <p>Subjects</p>
              <div className="education-underline"></div>

              <div className="subjects">
                <span className="subject">Biology <span className="grade">B</span></span>
                <span className="subject">Chemistry <span className="grade">S</span></span>
                <span className="subject">Agriculture <span className="grade">C</span></span>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}

export default Education;
{/* <div className="subjects">
  <div className="subject-line"><span className="label">Saivanery (T) (T)</span><span className="colon">:</span><span className="grade">A</span></div>
  <div className="subject-line"><span className="label">Lang. & Lit (T)</span><span className="colon">:</span><span className="grade">A</span></div>
  <div className="subject-line"><span className="label">English</span><span className="colon">:</span><span className="grade">S</span></div>
  <div className="subject-line"><span className="label">Science</span><span className="colon">:</span><span className="grade">C</span></div>
  <div className="subject-line"><span className="label">Mathematics</span><span className="colon">:</span><span className="grade">B</span></div>
  <div className="subject-line"><span className="label">History</span><span className="colon">:</span><span className="grade">A</span></div>
  <div className="subject-line"><span className="label">Music (Carnatic)</span><span className="colon">:</span><span className="grade">A</span></div>
  <div className="subject-line"><span className="label">Geography</span><span className="colon">:</span><span className="grade">C</span></div>
  <div className="subject-line"><span className="label">Inf. & Com. Tech</span><span className="colon">:</span><span className="grade">C</span></div>
</div> */}
