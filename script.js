document.getElementById('resume-form').addEventListener('submit', function (event) {
event.preventDefault(); 

//User input
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phoneNumber = document.getElementById('number').value; 
const journey = document.getElementById('journey').value;
const education = document.getElementById('education').value;
const technicalSkills = document.getElementById('technical-skills').value.split(','); 
const softSkills = document.getElementById('soft-skills').value.split(','); 
const profilePic = document.getElementById('profile-pic').files[0];

const formData = new FormData();
formData.append('name', name);
formData.append('email', email);
formData.append('phoneNumber', phoneNumber); 
formData.append('journey', journey);
formData.append('education', education);
formData.append('technicalSkills', JSON.stringify(technicalSkills));
formData.append('softSkills', JSON.stringify(softSkills));

const reader = new FileReader();
reader.onload = function(event) {
    formData.append('profilePic', event.target.result);
    localStorage.setItem('resumeData', JSON.stringify(Object.fromEntries(formData)));
    window.location.href = 'cv.html';
    };
    reader.readAsDataURL(profilePic);
});
