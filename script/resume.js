"use strict";
// Get the current page URL
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navigation a');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active"; // Add active class to the current link
  }
}
var _a, _b, _c, _d;
let profileImage = document.querySelector('.imgBox img');
const resumeData = JSON.parse(localStorage.getItem("resumeData") || '{}');
console.log("hello");
// Function to set text content
function setText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}
function createListItem(year, degree, institute) {
    return `
        <li>
            <h5>${year}</h5>
            <h4>${degree}</h4>
            <h4>${institute}</h4>
        </li>
    `;
}
function createExperienceItem(years, jobTitle, companyDesc) {
    return `
        <div class="box">
            <div class="year_company">
                <h5>${years}</h5>
            </div>
            <div class="text">
                <h4>${jobTitle}</h4>
                <p>${companyDesc}</p>
            </div>
        </div>
    `;
}
function createSkillItem(skill, proficiency) {
    return `
        <div class="box">
            <h4>${skill}</h4>
            <div class="percent2">
                <div class = "line-color" style="width: ${proficiency}%;"></div>
            </div>
        </div>
    `;
}
if (resumeData.profileImage) {
    profileImage.src = resumeData.profileImage;
}
setText("#profileName", `${((_a = resumeData.aboutMe) === null || _a === void 0 ? void 0 : _a.firstName) || ''} ${((_b = resumeData.aboutMe) === null || _b === void 0 ? void 0 : _b.lastName) || ''}`);
setText("#profileDesignation", ((_c = resumeData.aboutMe) === null || _c === void 0 ? void 0 : _c.designation) || '');
setText("#profileDescription", ((_d = resumeData.aboutMe) === null || _d === void 0 ? void 0 : _d.yourself) || '');
const contactInfo = resumeData.contactInfo || {};
setText("#contactPhone", contactInfo.mobileNumber || '');
setText("#contactEmail", contactInfo.email || '');
setText("#contactLinkedIn", contactInfo.linkedin || '');
setText("#contactAddress", contactInfo.address || '');
const languagesList = document.querySelector("#languageList");
if (languagesList && Array.isArray(resumeData.languages)) {
    languagesList.innerHTML = resumeData.languages.map((lang) => `<li>
    <span class="text">${lang.language}</span>
    <span class="percent">
    <div style="width: ${lang.proficiency}%;"></div>
    </span>
    </li>`).join('');
}
const educationList = document.querySelector("#educationList");
const experienceList = document.querySelector("#experienceList");

function createEducationItem(year, degree, institute) {
    return `
        <div class="education_content">
            <div class="education_time">
                <span class="education_rounder"></span>
                <span class="education_line"></span>
            </div>
            <div class="education_data bd-grid">
                <h3 class="education_title">${degree}</h3>
                <span class="education_studies">${institute}</span>
                <span class="education_year">${year}</span>
            </div>
        </div>
    `;
}

function createExperienceItem(years, jobTitle, companyDesc) {
    return `
        <div class="experience_content">
            <div class="experience_time">
                <span class="experience_rounder"></span>
                <span class="experience_line"></span>
            </div>
            <div class="experience_data bd-grid">
                <h3 class="experience_title">${jobTitle}</h3>
                <span class="experience_company">${companyDesc}</span>
                <span class="experience_year">${years}</span>
            </div>
        </div>
    `;
}

if (educationList && Array.isArray(resumeData.education)) {
    educationList.innerHTML = resumeData.education
        .map((edu) => createEducationItem(edu.year, edu.degree, edu.institute))
        .join('');
}

if (experienceList && Array.isArray(resumeData.experience)) {
    experienceList.innerHTML = resumeData.experience
        .map((exp) => createExperienceItem(exp.years, exp.jobTitle, exp.companyDesc))
        .join('');
}

const skillsList = document.querySelector("#skillsList");
if (skillsList && Array.isArray(resumeData.skills)) {
    skillsList.innerHTML = resumeData.skills.map((skill) => createSkillItem(skill.skill, skill.level)).join('');
}
function downloadResume() {
    const resumeElement = document.querySelector('.container');
    if (!resumeElement) {
        console.error('Resume container not found!');
        return;
    }
    const options = {
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: "a4", orientation: 'portrait' },
    };
    window.html2pdf().from(resumeElement).set(options).save();
}
const downloadButton = document.getElementById('downloadResume');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadResume);
}
else {
    console.error('Download button not found!');
}
