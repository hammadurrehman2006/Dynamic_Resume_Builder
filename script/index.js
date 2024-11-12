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
var _a;
// Selecting form fields
let firstName = document.querySelector('input[type="text"]:nth-of-type(1)');
let lastName = document.querySelector('#lastName');
let designation = document.querySelector('#designation');
let yourself = document.querySelector('textarea');
let mobileNumber = document.querySelector('#phoneNumber');
let email = document.querySelector('#email');
let linkedin = document.querySelector('#linkedin');
let address = document.querySelector('#address');
let eduYear1 = document.querySelector('#edu-year-1');
let eduDegree1 = document.querySelector('#edu-degree-1');
let eduInstitute1 = document.querySelector('#edu-institute-1');
let eduYear2 = document.querySelector('#edu-year-2');
let eduDegree2 = document.querySelector('#edu-degree-2');
let eduInstitute2 = document.querySelector('#edu-institute-2');
let language1 = document.querySelector('#language-1');
let proficiency1 = document.querySelector('#proficiency-1');
let language2 = document.querySelector('#language-2');
let proficiency2 = document.querySelector('#proficiency-2');
let jobTitle1 = document.querySelector('#job-title-1');
let companyDesc1 = document.querySelector('#company-desc-1');
let years1 = document.querySelector('#years-1');
let jobTitle2 = document.querySelector('#job-title-2');
let companyDesc2 = document.querySelector('#company-desc-2');
let years2 = document.querySelector('#years-2');
let jobTitle3 = document.querySelector('#job-title-3');
let companyDesc3 = document.querySelector('#company-desc-3');
let years3 = document.querySelector('#years-3');
let profileImageInput = document.querySelector('#profileImage');
let skill1 = document.querySelector('#skill-1');
let skillLevel1 = document.querySelector('#skill-level-1');
let skill2 = document.querySelector('#skill-2');
let skillLevel2 = document.querySelector('#skill-level-2');
let skill3 = document.querySelector('#skill-3');
let skillLevel3 = document.querySelector('#skill-level-3');
let skill4 = document.querySelector('#skill-4');
let skillLevel4 = document.querySelector('#skill-level-4');
let skill5 = document.querySelector('#skill-5');
let skillLevel5 = document.querySelector('#skill-level-5');
let profileImageBase64 = null;
profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.addEventListener('change', (event) => {
    var _a;
    const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profileImageBase64 = reader.result;
            console.log("Image converted to Base64:", profileImageBase64);
        };
        reader.readAsDataURL(file);
    }
});
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    e.preventDefault();
    // Creating an object to store form data
    const formData = {
        aboutMe: {
            firstName: (firstName === null || firstName === void 0 ? void 0 : firstName.value) || '',
            lastName: (lastName === null || lastName === void 0 ? void 0 : lastName.value) || '',
            designation: (designation === null || designation === void 0 ? void 0 : designation.value) || '',
            yourself: (yourself === null || yourself === void 0 ? void 0 : yourself.value) || ''
        },
        contactInfo: {
            mobileNumber: (mobileNumber === null || mobileNumber === void 0 ? void 0 : mobileNumber.value) || '',
            email: (email === null || email === void 0 ? void 0 : email.value) || '',
            linkedin: (linkedin === null || linkedin === void 0 ? void 0 : linkedin.value) || '',
            address: (address === null || address === void 0 ? void 0 : address.value) || ''
        },
        education: [
            {
                year: (eduYear1 === null || eduYear1 === void 0 ? void 0 : eduYear1.value) || '',
                degree: (eduDegree1 === null || eduDegree1 === void 0 ? void 0 : eduDegree1.value) || '',
                institute: (eduInstitute1 === null || eduInstitute1 === void 0 ? void 0 : eduInstitute1.value) || ''
            },
            {
                year: (eduYear2 === null || eduYear2 === void 0 ? void 0 : eduYear2.value) || '',
                degree: (eduDegree2 === null || eduDegree2 === void 0 ? void 0 : eduDegree2.value) || '',
                institute: (eduInstitute2 === null || eduInstitute2 === void 0 ? void 0 : eduInstitute2.value) || ''
            }
        ],
        languages: [
            {
                language: (language1 === null || language1 === void 0 ? void 0 : language1.value) || '',
                proficiency: (proficiency1 === null || proficiency1 === void 0 ? void 0 : proficiency1.value) || ''
            },
            {
                language: (language2 === null || language2 === void 0 ? void 0 : language2.value) || '',
                proficiency: (proficiency2 === null || proficiency2 === void 0 ? void 0 : proficiency2.value) || ''
            }
        ],
        experience: [
            {
                jobTitle: (jobTitle1 === null || jobTitle1 === void 0 ? void 0 : jobTitle1.value) || '',
                companyDesc: (companyDesc1 === null || companyDesc1 === void 0 ? void 0 : companyDesc1.value) || '',
                years: (years1 === null || years1 === void 0 ? void 0 : years1.value) || ''
            },
            {
                jobTitle: (jobTitle2 === null || jobTitle2 === void 0 ? void 0 : jobTitle2.value) || '',
                companyDesc: (companyDesc2 === null || companyDesc2 === void 0 ? void 0 : companyDesc2.value) || '',
                years: (years2 === null || years2 === void 0 ? void 0 : years2.value) || ''
            },
            {
                jobTitle: (jobTitle3 === null || jobTitle3 === void 0 ? void 0 : jobTitle3.value) || '',
                companyDesc: (companyDesc3 === null || companyDesc3 === void 0 ? void 0 : companyDesc3.value) || '',
                years: (years3 === null || years3 === void 0 ? void 0 : years3.value) || ''
            }
        ],
        skills: [
            {
                skill: (skill1 === null || skill1 === void 0 ? void 0 : skill1.value) || '',
                level: (skillLevel1 === null || skillLevel1 === void 0 ? void 0 : skillLevel1.value) || ''
            },
            {
                skill: (skill2 === null || skill2 === void 0 ? void 0 : skill2.value) || '',
                level: (skillLevel2 === null || skillLevel2 === void 0 ? void 0 : skillLevel2.value) || ''
            },
            {
                skill: (skill3 === null || skill3 === void 0 ? void 0 : skill3.value) || '',
                level: (skillLevel3 === null || skillLevel3 === void 0 ? void 0 : skillLevel3.value) || ''
            },
            {
                skill: (skill4 === null || skill4 === void 0 ? void 0 : skill4.value) || '',
                level: (skillLevel4 === null || skillLevel4 === void 0 ? void 0 : skillLevel4.value) || ''
            },
            {
                skill: (skill5 === null || skill5 === void 0 ? void 0 : skill5.value) || '',
                level: (skillLevel5 === null || skillLevel5 === void 0 ? void 0 : skillLevel5.value) || ''
            }
        ],
        profileImage: profileImageBase64 || ''
    };
    localStorage.setItem("resumeData", JSON.stringify(formData));
    console.log("Form data saved to localStorage:", formData);
    window.location.href = "./html/resume.html";
});
