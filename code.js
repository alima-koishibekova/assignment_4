function calculate() {
            let result = 100;
            var education = document.getElementById("education").value;
            var familynetworth = document.getElementById("familynetworth").value;
            var castle = document.getElementById("castle").value;
            const skills_1 = document.getElementById("vehicle_1");
            const skills_2 = document.getElementById("vehicle_2");
            const skills_3 = document.getElementById("vehicle_3");
            const skills_4 = document.getElementById("vehicle_4");
            const age_1 = document.getElementById("radio_1");
            const age_2 = document.getElementById("radio_2");
            const age_3 = document.getElementById("radio_3");
            const rep_1 = document.getElementById("rep_1");
            const rep_2 = document.getElementById("rep_2");
            const rep_3 = document.getElementById("rep_3");

            if(education == "undergraduate"){
                result = 100;
                result = result * 1.5;
            } else if(education == "college"){
                result = 100;
                result = result * 1.2;
            } else if(education == "high_school"){
                result = 100;
                result = result * 1.05;
            } else if(education == "middle_school"){
                result = 100;
                result = result * 0.9;
            }

            if(familynetworth == "more"){
                result = result * 2;
            } else if(familynetworth == "between"){
                result = result * 1.5;
            } else if(familynetworth == "less"){
                result = result * 1.2;
            } 

            if(castle == "brah"){
                result = result + 100;
            } else if(castle == "kshat"){
                result = result + 50;
            } else if(castle == "vaish"){
                result = result + 20;
            } else if(castle == "shudr"){
                result = result + 10;
            } else if(castle == "varna"){
                result = result - 50;
            } 
            
            if(skills_1.checked == true){
                result = result + 10;
            }
            if(skills_2.checked == true){
                result = result + 20;
            }
            if(skills_3.checked == true){
                result = result + 15;
            }
            if(skills_4.checked == true){
                result = result + 10;
            }

            if(age_1.checked == true){
                result = result * 1.5;
            } else if(age_2.checked == true){
                result = result * 1.2;
            } else if(age_3.checked == true){
                result = result * 0.95;
            }

            if(rep_1.checked == true){
                result = result * 0.85;
            }
            if(rep_2.checked == true){
                result = result * 0.9;
            }
            if(rep_3.checked == true){
                result = result - 20;
            }

            const res = document.getElementById("result");
            res.innerHTML = result;
        }