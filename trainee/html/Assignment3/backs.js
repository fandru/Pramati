

function valiform() {
  var fn = document.forms["form1"]["name"].value;
  var que = document.forms["form1"]["question"].value;
  var data = [{
      'name': 'hemanth',
      'color': 'blue',
      'movie': '3-idiots',
      'place': 'kodaicanal',
      'actor': 'akshay-kumar',
      'sport': 'cricket',
      'food': 'veg biryani',
      'vehical': 'bike',
      'actress': 'sonakshi',
      'domain': 'devolopment',
      'skill': 'ruby',
      'company': 'pramati',
      'experience': 'four',
      'marital': 'married'
    },
    {
      'name': 'haridas narayanaswamy',
      'color': 'blue',
      'movie': 'kunfu panda',
      'place': 'kumarakam(kerala)',
      'actor': 'mamutti',
      'sport': 'cricket',
      'food': 'malabar biriyani',
      'vehical': 'car',
      'actress': 'parvathi',
      'domain': 'machine learning',
      'skill': 'ML',
      'company': 'google',
      'experience': 'Nine',
      'marital': 'married'
    },
    {
      'name': 'seshachalam malisetti',
      'color': 'green',
      'movie': 'the shawshank redemption',
      'place': 'gokarana',
      'actor': 'brad pitts',
      'sport': 'cricket',
      'food': 'andhra meals',
      'vehical': 'lockheed sr-71(blackbird)',
      'actress': 'carey mulligan',
      'domain': 'distributed computing',
      'skill': 'concurrent programming',
      'company': 'spacex',
      'experience': 'six',
      'marital': 'single'
    },
    {
      'name': 'anija',
      'color': 'white',
      'movie': 'manichithrathazhu',
      'place': 'kochin',
      'actor': 'mohanlal',
      'sport': 'badmintion',
      'food': 'parrota and beef',
      'vehical': 'bike',
      'actress': 'shobhana',
      'domain': 'ruby',
      'skill': 'ruby,rails,javascript',
      'company': 'ruby on rails private limited,tiruvandram',
      'experience': 'five',
      'marital': 'married'
    },
    {
      'name': 'raveena',
      'color': 'orange',
      'movie': 'CIA',
      'place': 'dubai',
      'actor': 'mohanlal',
      'sport': 'cricket',
      'food': 'chicken biriyani',
      'vehical': 'bike',
      'actress': 'nazriya',
      'domain': 'development',
      'skill': 'python',
      'company': 'pramati',
      'experience': 'zero',
      'marital': 'single'
    },
    {
      'name': 'sindu',
      'color': 'pink',
      'movie': 'mugavari',
      'place': 'swtizerland',
      'actor': 'ajith',
      'sport': 'tennis',
      'food': 'chicken',
      'vehical': 'bike',
      'actress': 'keerthi suresh',
      'domain': 'development',
      'skill': 'php',
      'company': 'pramati',
      'experience': '3',
      'marital': 'married'
    },
    {
      'name': 'rakesh',
      'color': 'white',
      'movie': 'metukudi',
      'place': 'tirunelveli',
      'actor': 'ajith',
      'sport': 'cricket',
      'food': 'fish',
      'vehical': 'bike',
      'actress': 'trisha',
      'domain': 'devops',
      'skill': 'docker',
      'company': 'pramati',
      'experience': 'nine',
      'marital': 'married'
    },
    {
      'name': 'amoslayola',
      'color': 'blue',
      'movie': 'lord of rings',
      'place': 'trichy',
      'actor': 'none',
      'sport': 'cricket',
      'food': 'biriyani',
      'vehical': 'car',
      'actress': 'none',
      'domain': 'data science',
      'skill': 'data science',
      'company': 'pramati',
      'experience': '5',
      'marital': 'married'
    },
    {
      'name': 'ashok raja',
      'color': 'red',
      'movie': 'prediator',
      'place': 'kanya kumari',
      'actor': 'none',
      'sport': 'foot ball',
      'food': 'noodles',
      'vehical': 'bike',
      'actress': 'jacqueline',
      'domain': 'big data',
      'skill': 'data base',
      'company': 'pramati',
      'experience': '6',
      'marital': 'single'
    },
    {
      'name': 'arun',
      'color': 'blue',
      'movie': 'alaipayuthey',
      'place': 'gokarna',
      'actor': 'vjs',
      'sports': 'hockey',
      'food': 'continental',
      'vehicle': 'bicylce',
      'actress': 'simran',
      'domain': 'dc',
      'skill': 'ml',
      'company': 'verizon',
      'experience': '12',
      'marital': 'married'
    }
  ];
  var e = document.getElementById("ddlViewBy");
  var strUser = e.options[e.selectedIndex].value;


  for (var i = data.length - 1; i >= 0; i--) {
    if (data[i].name == strUser) {
      var ind = i;
    }
  }


  if (/color/i.test(que) == true) {
    alert(data[ind].color);
  }

  if (/movie/i.test(que) == true) {
    alert(data[ind].movie);
  }

  if (/place/i.test(que) == true) {
    alert(data[ind].place)
  }
  if (/actor/i.test(que) == true) {
    alert(data[ind].actor);
  }

  if (/sport/i.test(que) == true) {
    alert(data[ind].sport);
  }

  if (/food/i.test(que) == true) {
    alert(data[ind].food)
  }
  if (/vehical/i.test(que) == true) {
    alert(data[ind].vehical);
  }

  if (/actress/i.test(que) == true) {
    alert(data[ind].actress);
  }

  if (/domain/i.test(que) == true) {
    alert(data[ind].domain)
  }
  if (/skill/i.test(que) == true) {
    alert(data[ind].skill)
  }
  if (/company/i.test(que) == true) {
    alert(data[ind].company);
  }

  if (/experience/i.test(que) == true) {
    alert(data[ind].experience);
  }

  if (/marital/i.test(que) == true) {
    alert(data[ind].marital)
  }


}

