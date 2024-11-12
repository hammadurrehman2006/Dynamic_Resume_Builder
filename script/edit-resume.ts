interface EducationEntry {
    year: string;
    degree: string;
    institute: string;
}

interface LanguageEntry {
    language: string;
    proficiency: string;
}

interface ExperienceEntry {
    jobTitle: string;
    companyDesc: string;
    years: string;
}

interface SkillEntry {
    skill: string;
    level: string;
}

interface ResumeData {
    firstName: string;
    lastName: string;
    designation: string;
    yourself: string;
    phoneNumber: string;
    email: string;
    linkedin: string;
    address: string;
    education: EducationEntry[];
    languages: LanguageEntry[];
    experience: ExperienceEntry[];
    skills: SkillEntry[];
    aboutMe?: any;
    contactInfo?: any;
    profileImage?: string;
}

function loadStoredData(): void {
    const storedData = JSON.parse(localStorage.getItem('resumeData') || '{}') as ResumeData;

    if (!storedData) {
        alert('No resume data found. Please create a resume first.');
        return;
    }

    console.log(storedData);


    (document.getElementById('firstName') as HTMLInputElement).value = storedData.aboutMe.firstName || '';
    (document.getElementById('lastName') as HTMLInputElement).value = storedData.aboutMe.lastName || '';
    (document.getElementById('designation') as HTMLInputElement).value = storedData.aboutMe.designation || '';
    (document.getElementById('yourself') as HTMLTextAreaElement).value = storedData.aboutMe.yourself || '';

    (document.getElementById('phoneNumber') as HTMLInputElement).value = storedData.contactInfo.phoneNumber || '';

    (document.getElementById('email') as HTMLInputElement).value = storedData.contactInfo.email || '';
    (document.getElementById('linkedin') as HTMLInputElement).value = storedData.contactInfo.linkedin || '';

    (document.getElementById('address') as HTMLInputElement).value = storedData.contactInfo.address || '';

    // Education
    (document.getElementById('edu-year-1') as HTMLInputElement).value = storedData.education?.[0]?.year || '';
    (document.getElementById('edu-degree-1') as HTMLInputElement).value = storedData.education?.[0]?.degree || '';
    (document.getElementById('edu-institute-1') as HTMLInputElement).value = storedData.education?.[0]?.institute || '';
    (document.getElementById('edu-year-2') as HTMLInputElement).value = storedData.education?.[1]?.year || '';
    (document.getElementById('edu-degree-2') as HTMLInputElement).value = storedData.education?.[1]?.degree || '';
    (document.getElementById('edu-institute-2') as HTMLInputElement).value = storedData.education?.[1]?.institute || '';

    // Languages
    (document.getElementById('language-1') as HTMLInputElement).value = storedData.languages?.[0]?.language || '';
    (document.getElementById('proficiency-1') as HTMLInputElement).value = storedData.languages?.[0]?.proficiency || '';
    (document.getElementById('language-2') as HTMLInputElement).value = storedData.languages?.[1]?.language || '';
    (document.getElementById('proficiency-2') as HTMLInputElement).value = storedData.languages?.[1]?.proficiency || '';

    // Experience
    (document.getElementById('job-title-1') as HTMLInputElement).value = storedData.experience?.[0]?.jobTitle || '';
    (document.getElementById('company-desc-1') as HTMLInputElement).value = storedData.experience?.[0]?.companyDesc || '';
    (document.getElementById('years-1') as HTMLInputElement).value = storedData.experience?.[0]?.years || '';
    (document.getElementById('job-title-2') as HTMLInputElement).value = storedData.experience?.[1]?.jobTitle || '';
    (document.getElementById('company-desc-2') as HTMLInputElement).value = storedData.experience?.[1]?.companyDesc || '';
    (document.getElementById('years-2') as HTMLInputElement).value = storedData.experience?.[1]?.years || '';
    (document.getElementById('job-title-3') as HTMLInputElement).value = storedData.experience?.[2]?.jobTitle || '';
    (document.getElementById('company-desc-3') as HTMLInputElement).value = storedData.experience?.[2]?.companyDesc || '';
    (document.getElementById('years-3') as HTMLInputElement).value = storedData.experience?.[2]?.years || '';

    // Skills
    (document.getElementById('skill-1') as HTMLInputElement).value = storedData.skills?.[0]?.skill || '';
    (document.getElementById('skill-level-1') as HTMLInputElement).value = storedData.skills?.[0]?.level || '';
    (document.getElementById('skill-2') as HTMLInputElement).value = storedData.skills?.[1]?.skill || '';
    (document.getElementById('skill-level-2') as HTMLInputElement).value = storedData.skills?.[1]?.level || '';
    (document.getElementById('skill-3') as HTMLInputElement).value = storedData.skills?.[2]?.skill || '';
    (document.getElementById('skill-level-3') as HTMLInputElement).value = storedData.skills?.[2]?.level || '';

    // Load profile image preview
    if (storedData.profileImage) {
        const profilePreview = document.getElementById('profilePreview') as HTMLImageElement;
        profilePreview.src = storedData.profileImage;
        profilePreview.style.display = 'block';
    }
}


document.getElementById('editResumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

  
    const updatedData: ResumeData = {
        aboutMe: {
            firstName: (document.getElementById('firstName') as HTMLInputElement).value,
            lastName: (document.getElementById('lastName') as HTMLInputElement).value,
            designation: (document.getElementById('designation') as HTMLInputElement).value,
            yourself: (document.getElementById('yourself') as HTMLTextAreaElement).value,
        },
        contactInfo: {
            phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            linkedin: (document.getElementById('linkedin') as HTMLInputElement).value,
            address: (document.getElementById('address') as HTMLInputElement).value,
        },
        education: [
            {
                year: (document.getElementById('edu-year-1') as HTMLInputElement).value,
                degree: (document.getElementById('edu-degree-1') as HTMLInputElement).value,
                institute: (document.getElementById('edu-institute-1') as HTMLInputElement).value,
            },
            {
                year: (document.getElementById('edu-year-2') as HTMLInputElement).value,
                degree: (document.getElementById('edu-degree-2') as HTMLInputElement).value,
                institute: (document.getElementById('edu-institute-2') as HTMLInputElement).value,
            },
        ],
        languages: [
            {
                language: (document.getElementById('language-1') as HTMLInputElement).value,
                proficiency: (document.getElementById('proficiency-1') as HTMLInputElement).value,
            },
            {
                language: (document.getElementById('language-2') as HTMLInputElement).value,
                proficiency: (document.getElementById('proficiency-2') as HTMLInputElement).value,
            },
        ],
        experience: [
            {
                jobTitle: (document.getElementById('job-title-1') as HTMLInputElement).value,
                companyDesc: (document.getElementById('company-desc-1') as HTMLInputElement).value,
                years: (document.getElementById('years-1') as HTMLInputElement).value,
            },
            {
                jobTitle: (document.getElementById('job-title-2') as HTMLInputElement).value,
                companyDesc: (document.getElementById('company-desc-2') as HTMLInputElement).value,
                years: (document.getElementById('years-2') as HTMLInputElement).value,
            },
            {
                jobTitle: (document.getElementById('job-title-3') as HTMLInputElement).value,
                companyDesc: (document.getElementById('company-desc-3') as HTMLInputElement).value,
                years: (document.getElementById('years-3') as HTMLInputElement).value,
            },
        ],
        skills: [
            {
                skill: (document.getElementById('skill-1') as HTMLInputElement).value,
                level: (document.getElementById('skill-level-1') as HTMLInputElement).value,
            },
            {
                skill: (document.getElementById('skill-2') as HTMLInputElement).value,
                level: (document.getElementById('skill-level-2') as HTMLInputElement).value,
            },
            {
                skill: (document.getElementById('skill-3') as HTMLInputElement).value,
                level: (document.getElementById('skill-level-3') as HTMLInputElement).value,
            },
        ],
        firstName: "",
        lastName: "",
        designation: "",
        yourself: "",
        phoneNumber: "",
        email: "",
        linkedin: "",
        address: ""
    };


    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
    if (profileImageInput.files && profileImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (event) {
            updatedData.profileImage = event.target?.result as string;
            localStorage.setItem('resumeData', JSON.stringify(updatedData));
            alert('Resume updated successfully!');
            window.location.href = './my-resume.html'; 
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    } else {

        localStorage.setItem('resumeData', JSON.stringify(updatedData));
        alert('Resume updated successfully!');
        window.location.href = './my-resume.html'; 
    }
});

window.onload = loadStoredData;