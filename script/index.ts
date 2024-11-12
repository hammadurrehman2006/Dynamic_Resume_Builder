
// Selecting form fields
let firstName = document.querySelector('input[type="text"]:nth-of-type(1)') as HTMLInputElement;
let lastName = document.querySelector('#lastName') as HTMLInputElement;
let designation = document.querySelector('#designation') as HTMLInputElement;
let yourself = document.querySelector('textarea') as HTMLTextAreaElement;

let mobileNumber = document.querySelector('#phoneNumber') as HTMLInputElement;
let email = document.querySelector('#email') as HTMLInputElement;
let linkedin = document.querySelector('#linkedin') as HTMLInputElement;
let address = document.querySelector('#address') as HTMLInputElement;

let eduYear1 = document.querySelector('#edu-year-1') as HTMLInputElement;
let eduDegree1 = document.querySelector('#edu-degree-1') as HTMLInputElement;
let eduInstitute1 = document.querySelector('#edu-institute-1') as HTMLInputElement;

let eduYear2 = document.querySelector('#edu-year-2') as HTMLInputElement;
let eduDegree2 = document.querySelector('#edu-degree-2') as HTMLInputElement;
let eduInstitute2 = document.querySelector('#edu-institute-2') as HTMLInputElement;

let language1 = document.querySelector('#language-1') as HTMLInputElement;
let proficiency1 = document.querySelector('#proficiency-1') as HTMLInputElement;

let language2 = document.querySelector('#language-2') as HTMLInputElement;
let proficiency2 = document.querySelector('#proficiency-2') as HTMLInputElement;

let jobTitle1 = document.querySelector('#job-title-1') as HTMLInputElement;
let companyDesc1 = document.querySelector('#company-desc-1') as HTMLInputElement;
let years1 = document.querySelector('#years-1') as HTMLInputElement;

let jobTitle2 = document.querySelector('#job-title-2') as HTMLInputElement;
let companyDesc2 = document.querySelector('#company-desc-2') as HTMLInputElement;
let years2 = document.querySelector('#years-2') as HTMLInputElement;

let jobTitle3 = document.querySelector('#job-title-3') as HTMLInputElement;
let companyDesc3 = document.querySelector('#company-desc-3') as HTMLInputElement;
let years3 = document.querySelector('#years-3') as HTMLInputElement;

let profileImageInput = document.querySelector('#profileImage') as HTMLInputElement;

let skill1 = document.querySelector('#skill-1') as HTMLInputElement;
let skillLevel1 = document.querySelector('#skill-level-1') as HTMLInputElement;

let skill2 = document.querySelector('#skill-2') as HTMLInputElement;
let skillLevel2 = document.querySelector('#skill-level-2') as HTMLInputElement;

let skill3 = document.querySelector('#skill-3') as HTMLInputElement;
let skillLevel3 = document.querySelector('#skill-level-3') as HTMLInputElement;

let skill4 = document.querySelector('#skill-4') as HTMLInputElement;
let skillLevel4 = document.querySelector('#skill-level-4') as HTMLInputElement;

let skill5 = document.querySelector('#skill-5') as HTMLInputElement;
let skillLevel5 = document.querySelector('#skill-level-5') as HTMLInputElement;

let profileImageBase64: string | null = null;

profileImageInput?.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profileImageBase64 = reader.result as string;
            console.log("Image converted to Base64:", profileImageBase64);
        };
        reader.readAsDataURL(file);
    }
});

document.querySelector("form")?.addEventListener("submit", (e): void => {
    e.preventDefault();

    // Creating an object to store form data
    const formData = {
        aboutMe: {
            firstName: firstName?.value || '',
            lastName: lastName?.value || '',
            designation: designation?.value || '',
            yourself: yourself?.value || ''
        },
        contactInfo: {
            mobileNumber: mobileNumber?.value || '',
            email: email?.value || '',
            linkedin: linkedin?.value || '',
            address: address?.value || ''
        },
        education: [
            {
                year: eduYear1?.value || '',
                degree: eduDegree1?.value || '',
                institute: eduInstitute1?.value || ''
            },
            {
                year: eduYear2?.value || '',
                degree: eduDegree2?.value || '',
                institute: eduInstitute2?.value || ''
            }
        ],
        languages: [
            {
                language: language1?.value || '',
                proficiency: proficiency1?.value || ''
            },
            {
                language: language2?.value || '',
                proficiency: proficiency2?.value || ''
            }
        ],
        experience: [
            {
                jobTitle: jobTitle1?.value || '',
                companyDesc: companyDesc1?.value || '',
                years: years1?.value || ''
            },
            {
                jobTitle: jobTitle2?.value || '',
                companyDesc: companyDesc2?.value || '',
                years: years2?.value || ''
            },
            {
                jobTitle: jobTitle3?.value || '',
                companyDesc: companyDesc3?.value || '',
                years: years3?.value || ''
            }
        ],
        skills: [
            {
                skill: skill1?.value || '',
                level: skillLevel1?.value || ''
            },
            {
                skill: skill2?.value || '',
                level: skillLevel2?.value || ''
            },
            {
                skill: skill3?.value || '',
                level: skillLevel3?.value || ''
            },
            {
                skill: skill4?.value || '',
                level: skillLevel4?.value || ''
            },
            {
                skill: skill5?.value || '',
                level: skillLevel5?.value || ''
            }
        ],
        profileImage: profileImageBase64 || ''
    };

    localStorage.setItem("resumeData", JSON.stringify(formData));

    console.log("Form data saved to localStorage:", formData);


    window.location.href = "./html/resume.html"
});