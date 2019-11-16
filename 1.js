function biodata (name, age){
	this.name = "Isnanda Tegar Budiyarto";
	this.age = 23;
	var address = "Ngasinan RT01/04, Watubonang, Tawangsari, Sukoharjo";
	var hobbies = ["Sport, outdoor"];
	var is_married = false;
	var listschool = {
		school_name:"Telkom University",
		year_in: 2014,
		year_out: 2019,
		major: "Informatics Engineer"
	};

	var skills = {
		skill_name:"C++", 
		level:"beginner"
	};

	var interest_in_coding = true;

	listschool.push("SMA N 1 Sukoharjo", 2011, 2014, "IPA");
	skills.push("Java", "beginner");
	skills.push("Python", "beginner");
	skills.push("Adobe Premiere", "beginner");
	skills.push("Adobe Photoshop", "advanced");
	skills.push("Adobe Illustrator", "beginner");
	skills.push("Adobe After Effects", "beginner");
	skills.push("Corel Draw", "beginner");
	skills.push("Windows OS", "advanced");
	skills.push("Linux OS", "advanced");

	/*function school(school_name, year_in, year_out, major){
		this.school_name = school_name;
		this.year_in = year_in;
		this.year_out = year_out;
		this.major = major;
	}

	var listschool1 = new school("Telkom University", 2014, 2019,
		"Informatics Engineer");
	var listschool2 = new school("SMA N 1 Sukoharjo", 2011, 2014, "IPA");
	
	function skills (skill_name, level){
		this.skill_name = skill_name;
		this.level = level;
		if (this.level != "Beginner", "beginner", "Advanced",
		"advanced", "Expert", "Expert" ){
			this.level = "invalid";
		}
	}

	var skills1 = new skills("C++", "beginner");
	var skills2 = new skills("java", "beginner");
	var skills3*/

	return JSON.parse(name, age, address, hobbies, is_married, listschool, skills);
}