var imgdiv=document.querySelector('.img-div');
var socialicon=document.querySelectorAll('.socialicon');
var liker=document.querySelector('.like');
var imgact=1;
imgdiv.addEventListener('mouseenter',function(){
	for(var i=0;i<socialicon.length;i++){
	socialicon[i].style.display="inline";
}
})
imgdiv.addEventListener('mouseleave',function(){
	for(var i=0;i<socialicon.length;i++){
	socialicon[i].style.display="";

}
})
var songlist=[{
		path:"https://9jaflaver.com/wp-content/uploads/2021/05/Ruger_Bounce_9jaflaver.com_.mp3",
		name:"Ruger_bounce",
		artist: 'Ruger',
		format: ".mp3",
		divid: "list1",
		img: 'ruger.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2021/03/Gyakie_Forever_Remix_Omah_Lay_9jaflaver.com_.mp3",
		name: "Gyakie_forever",
		artist: 'Gyakie Ft Omahlay',
		format: ".mp3",
		divid: "list2",
		img: 'gyakie.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2020/08/Fireboy_Tattoo_9jaflaver.com_.mp3",
		name: "Fireboy_Tattoo",
		artist: 'Fireboy',
		format: ".mp3",
		divid: "list3",
		img: 'fireboy.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2020/11/Fireboy_Dont_Say_No_9jaflaver.com_.mp3",
		name: "Dont_Say_No",
		artist: 'Fireboy',
		format: ".mp3",
		divid: "list4",
		img: 'fireboy.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2021/10/LadiPoe_Running_Ft_Fireboy_DML_9jaflaver.com_.mp3",
		name: "LadiPoe_Running",
		artist: 'LadiPoe Ft Fireboy',
		format: ".mp3",
		divid: "list5",
		img: 'running.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2021/08/Gyakie_Need_Me_9jaflaver.com_.mp3",
		name: "Gyakie_Need_Me",
		artist: 'Gyakie',
		format: ".mp3",
		divid: "list6",
		img: 'gyakie.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2022/08/Asake_Termiantor_Refix_9jaflaver.com_.mp3",
		name: "Asake_Terminator",
		artist: 'Asake',
		format: ".mp3",
		divid: "list7",
		img: 'Asake.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2022/11/Mavin_All_Stars_Won_Da_Mo_9jaflaver.com_.mp3",
		name: "Won_Da_Mo",
		artist: 'Mavin_All_Stars',
		format: ".mp3",
		divid: "list8",
		img: 'wondamon.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2022/11/Ruger_Asiwaju_9jaflaver.com_.mp3",
		name: "Ruger_Asiwaju",
		artist: 'Ruger',
		format: ".mp3",
		divid: "list9",
		img: 'ruger.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2021/04/Cheque_Ft_Fireboy_DML_History_9jaflaver.com_.mp3",
		name: "History",
		artist: 'Cheque_Ft_Fireboy',
		format: ".mp3",
		divid: "list10",
		img: 'history.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2022/06/Chris_Brown_Ft_Wizkid_Call_Me_Everyday_9jaflaver.com_.mp3",
		name: "Call_Me_Everyday",
		artist: 'Chris_Brown_Ft_Wizkid',
		format: ".mp3",
		divid: "list11",
		img: 'call-me-everyday.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2022/07/Fireboy_Bandana_Ft_Asake_9jaflaver.com_-1.mp3",
		name: "Bandana",
		artist: 'Fireboy_Ft_Asake',
		format: ".mp3",
		divid: "list12",
		img: 'fireboy.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2021/12/Fireboy_DML_Ft_Ed-Sheeran_Peru_9jaflaver.com_.mp3",
		name: "Fireboy_Peru",
		artist: 'Fireboy_Ft_Ed-Sheeran',
		format: ".mp3",
		divid: "list13",
		img: 'fireboy.png',
		divclass: 'searchlist'
	},
	{
		path:"https://9jaflaver.com/wp-content/uploads/2019/08/Fireboy_DML_Magic_9jaflaver.com_.mp3",
		name: "Fireboy_Magic",
		artist: 'Fireboy',
		format: ".mp3",
		divid: "list14",
		img: 'fireboy.png',
		divclass: 'searchlist'
	},
	{
		path:"http://9jaflaver.com/wp-content/uploads/2018/07/WizKid_Holla_At_Your_Boy_9jaflaver.com_.mp3",
		name: "Holla-At-Your-Boy",
		artist: 'Wizkid',
		format: ".mp3",
		divid: "list15",
		img: 'wizkid.png',
		divclass: 'searchlist'
	}];

	/* embed the songs in html element */
	var songdiv=document.querySelector('.song-div');
	function content() {
	for(let s=0;s<songlist.length;s++){
	if(window.matchMedia('(min-width:600px) and (max-width: 999px)').matches){
	songdiv.innerHTML+=`<div id="list-container" style="
		width: 100%;
		padding: 0px 3px;
		cursor: pointer;
		text-align: left">
	<img src=${songlist[s].img} style="width: 150px;height: 150px;" id="list-img">
	<span style="margin: 0px 10px;">
	<div id=${songlist[s].divid} class=${songlist[s].divclass} style="overflow-x: hidden;font-size: 15px;">${songlist[s].name}</div>
	<div style="display: none">${songlist[s].path}</div>
	<div id="list-artist"  style="overflow-x: hidden; color: rgb(100,100,100);font-size: 12px;">${songlist[s].artist}</div>
	<div style="display: none">${songlist[s].path}</div>
	<i class="fa fa-download download" style="float: right;transform: translateY(-35px);"></i>
	</span>
	</div>`;
	songdiv.style.display="grid";
	songdiv.style.paddingTop="50px";
	songdiv.style.justifyContent="center";
	songdiv.style.gridTemplateColumns="repeat(3,150px)";
	songdiv.style.gridGap="1.5rem";
}
else if(window.matchMedia('(min-width:1000px)').matches){
	songdiv.innerHTML+=`<div id="list-container" style="
		width: 100%;
		padding: 0px 3px;
		cursor: pointer;
		text-align: left">
	<img src=${songlist[s].img} style="width: 270px;height: 270px;" id="list-img">
	<span style="margin: 0px 10px;">
	<div id=${songlist[s].divid} class=${songlist[s].divclass}>${songlist[s].name}</div>
	<div style="display: none">${songlist[s].path}</div>
	<div id="list-artist">${songlist[s].artist}</div>
	<div style="display: none">${songlist[s].path}</div>
	<i class="fa fa-download download" style="float: right;transform: translateY(-35px);"></i>
	</span>
	</div>`;
	songdiv.style.display="grid";
	songdiv.style.paddingTop="50px";
	songdiv.style.justifyContent="center";
	songdiv.style.gridTemplateColumns="repeat(3,270px)";
	songdiv.style.gridGap="1.5rem";
}
	else{
		songdiv.innerHTML+=`<div><div id="list-container" style="display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 80px;
		padding: 0px 3px;
		border-bottom: 1px solid rgb(50,50,50);
		cursor: pointer;
		text-align: left">
		<div style="display: flex;
		justify-content: center;
		align-items: center">
	<img src=${songlist[s].img} style="width: 55px;height: 55px" id="list-img">
	<span style="margin: 0px 10px">
	<div id=${songlist[s].divid} class=${songlist[s].divclass}>${songlist[s].name}</div>
	<div style="display: none">${songlist[s].path}</div>
	<div id="list-artist">${songlist[s].artist}</div>
	</span>
	</div>
	<div>
	<div style="display: none">${songlist[s].path}</div>
	<i class="fa fa-download download"></i>
	</div>
	</div>
	</div>`;
	}
}
}
content();
/* remove the border-bottom of the last child */
 songdiv.lastElementChild.style.borderBottom="0px";
/* search feature */
var header=document.querySelector('.header');
var hedsearch=document.querySelector('.hed-seaarch');
var searchicon=document.querySelector('.search-icon');
var searcher=document.querySelector('.searcher');
var searcher2=document.querySelector('.searcher2');
var leftsearch=document.querySelector('.left-search');
var searchitems=document.querySelectorAll('.searchlist');
searchicon.addEventListener('click', function(){
	searchicon.style.display='none';
	if(window.matchMedia('(max-width:500px)').matches){
	header.style.display='none';
	hedsearch.style.display="flex";
	leftsearch.style.display='inline';
    }
    })

searcher2.addEventListener('keyup', function(){
	var searchitems=document.querySelectorAll('.searchlist');
		for(let s=0;s<searchitems.length;s++){
			if(searchitems[s].innerHTML.toLowerCase().includes(searcher2.value.toLowerCase())){
				searchitems[s].parentElement.previousElementSibling.style.display='';
				searchitems[s].parentElement.style.display='';
				searchitems[s].parentElement.parentElement.parentElement.parentElement.style.display='';
			}
			else{
				searchitems[s].parentElement.previousElementSibling.style.display="none";
				searchitems[s].parentElement.style.display='none';
				searchitems[s].parentElement.parentElement.parentElement.parentElement.style.display='none';
			}
		}
})
/* add event listener to the angle left icon */
leftsearch.addEventListener('click', function(){
	header.style.display='';
	hedsearch.style.display="";
	leftsearch.style.display='';
	searchicon.style.display='';
	searcher2.value='';
	for(let u=0;u<searchitems.length;u++){
		searchitems[u].parentElement.previousElementSibling.style.display='';
		searchitems[u].parentElement.style.display='';
		searchitems[u].parentElement.parentElement.parentElement.parentElement.style.display='';
	}
})
searcher.addEventListener('keyup', function(){
			if(window.matchMedia('(min-width:501px)').matches){
				for(let s=0;s<searchitems.length;s++){
				if(searchitems[s].innerHTML.toLowerCase().includes(searcher.value.toLowerCase())){
					songdiv.style.display="flex";
					songdiv.style.width="400px";
					if(window.matchMedia('(max-width:999px)').matches){
						songdiv.style.width="270px";
					}
	                songdiv.style.paddingTop="50px";
	                songdiv.style.justifyContent="center";
	                songdiv.style.flexDirection="column";
	                searchitems[s].parentElement.previousElementSibling.style.display='';
					searchitems[s].parentElement.style.display='';
				}
				else{
					searchitems[s].parentElement.previousElementSibling.style.display="none";
					searchitems[s].parentElement.style.display='none';
				}
			}
	}
	if(searcher.value==""){
		songdiv.style.width="100%";
		if(window.matchMedia('(min-width: 1000px)').matches){
		songdiv.style.display="grid";
	    songdiv.style.paddingTop="50px";
		songdiv.style.justifyContent="center";
		songdiv.style.gridTemplateColumns="repeat(3,270px)";
		songdiv.style.gridGap="1.5rem";
}
	if(window.matchMedia('(max-width: 999px)').matches){
		songdiv.style.display="grid";
	songdiv.style.paddingTop="50px";
	songdiv.style.justifyContent="center";
	songdiv.style.gridTemplateColumns="repeat(3,150px)";
	songdiv.style.gridGap="1.5rem";
	}
		for(let u=0;u<searchitems.length;u++){
		searchitems[u].parentElement.previousElementSibling.style.display='';
					searchitems[u].parentElement.style.display='';
				}
}
})
    var index=0;
    /* music-down effect */
    var musicdown=document.querySelector('.music-down');
    let musiccontainer=document.querySelector('.music-container');
    musicdown.addEventListener('click',function(){
    	 musiccontainer.style.display="flex";
    })
    musicdown.innerHTML+=`<div style="display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		height: 70px;
		padding: 5px 20px;
		border-bottom: 1px solid rgb(50,50,50);
		cursor: pointer;
		text-align: left">
		<div style="display: flex;
		justify-content: center;
		margin:0px;
		align-items: center">
	<img src=${songlist[index].img} style="width: 55px;height: 55px" class="imgupdate">
	<span style="margin: 0px 10px">
	<div class="songName">${songlist[index].name}</div>
	<div class="songArtist">${songlist[index].artist}</div>
	</span>
	</div>
	<div style="align-self: center"><i class="fa fa-play fa-2x" id="playpause"></i></i>
	</div>
	</div>`;
	/* hide music effect */
	var hideme=document.querySelector('.hideme');
	hideme.addEventListener('click',function(){
		musiccontainer.style.display="";
	})
	/*aad*/
	/* add event listener to the html list */
    list1.parentElement.addEventListener('click', function(){
	audio.src=list1.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list1.innerHTML;
	artistname.innerHTML=list1.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list1.innerHTML;
	songArtist.innerHTML=list1.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list1.parentElement.previousElementSibling.src;
	imgupdate.src=list1.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list1.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list1.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list1.innerHTML;
	artistname.innerHTML=list1.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list1.innerHTML;
	songArtist.innerHTML=list1.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list1.parentElement.previousElementSibling.src;
	imgupdate.src=list1.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list2=document.querySelector('#list2');
    list2.parentElement.addEventListener('click', function(){
	audio.src=list2.nextElementSibling.innerHTML;
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list2.innerHTML;
	artistname.innerHTML=list2.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list2.innerHTML;
	songArtist.innerHTML=list2.nextElementSibling.nextElementSibling.innerHTML;
	//
	musicimg.src=list2.parentElement.previousElementSibling.src;
	imgupdate.src=list2.parentElement.previousElementSibling.src;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list2.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list2.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list2.innerHTML;
	artistname.innerHTML=list2.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list2.innerHTML;
	songArtist.innerHTML=list2.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list2.parentElement.previousElementSibling.src;
	imgupdate.src=list2.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list3=document.querySelector('#list3');
    list3.parentElement.addEventListener('click', function(){
	audio.src=list3.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list3.innerHTML;
	artistname.innerHTML=list3.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list3.innerHTML;
	songArtist.innerHTML=list3.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list3.parentElement.previousElementSibling.src;
	imgupdate.src=list3.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list3.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list3.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list3.innerHTML;
	artistname.innerHTML=list3.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list3.innerHTML;
	songArtist.innerHTML=list3.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list3.parentElement.previousElementSibling.src;
	imgupdate.src=list3.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list4=document.querySelector('#list4');
    list4.parentElement.addEventListener('click', function(){
	audio.src=list4.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list4.innerHTML;
	artistname.innerHTML=list4.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list4.innerHTML;
	songArtist.innerHTML=list4.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list4.parentElement.previousElementSibling.src;
	imgupdate.src=list4.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list4.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list4.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list4.innerHTML;
	artistname.innerHTML=list4.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list4.innerHTML;
	songArtist.innerHTML=list4.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list4.parentElement.previousElementSibling.src;
	imgupdate.src=list4.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list5=document.querySelector('#list5');
    list5.parentElement.addEventListener('click', function(){
	audio.src=list5.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list5.innerHTML;
	artistname.innerHTML=list5.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list5.innerHTML;
	songArtist.innerHTML=list5.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list5.parentElement.previousElementSibling.src;
	imgupdate.src=list5.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list5.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list5.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list5.innerHTML;
	artistname.innerHTML=list5.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list5.innerHTML;
	songArtist.innerHTML=list5.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list5.parentElement.previousElementSibling.src;
	imgupdate.src=list5.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list6=document.querySelector('#list6');
    list6.parentElement.addEventListener('click', function(){
	audio.src=list6.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list6.innerHTML;
	artistname.innerHTML=list6.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list6.innerHTML;
	songArtist.innerHTML=list6.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list6.parentElement.previousElementSibling.src;
	imgupdate.src=list6.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list6.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list6.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list6.innerHTML;
	artistname.innerHTML=list6.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list6.innerHTML;
	songArtist.innerHTML=list6.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list6.parentElement.previousElementSibling.src;
	imgupdate.src=list6.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list7=document.querySelector('#list7');
    list7.parentElement.addEventListener('click', function(){
	audio.src=list7.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list7.innerHTML;
	artistname.innerHTML=list7.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list7.innerHTML;
	songArtist.innerHTML=list7.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list7.parentElement.previousElementSibling.src;
	imgupdate.src=list7.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list7.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list7.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list7.innerHTML;
	artistname.innerHTML=list7.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list7.innerHTML;
	songArtist.innerHTML=list7.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list7.parentElement.previousElementSibling.src;
	imgupdate.src=list7.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list8=document.querySelector('#list8');
    list8.parentElement.addEventListener('click', function(){
	audio.src=list8.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list8.innerHTML;
	artistname.innerHTML=list8.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list8.innerHTML;
	songArtist.innerHTML=list8.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list8.parentElement.previousElementSibling.src;
	imgupdate.src=list8.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list8.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list8.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list8.innerHTML;
	artistname.innerHTML=list8.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list8.innerHTML;
	songArtist.innerHTML=list8.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list8.parentElement.previousElementSibling.src;
	imgupdate.src=list8.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list9=document.querySelector('#list9');
    list9.parentElement.addEventListener('click', function(){
	audio.src=list9.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list9.innerHTML;
	artistname.innerHTML=list9.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list9.innerHTML;
	songArtist.innerHTML=list9.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list9.parentElement.previousElementSibling.src;
	imgupdate.src=list9.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list9.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list9.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list9.innerHTML;
	artistname.innerHTML=list9.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list9.innerHTML;
	songArtist.innerHTML=list9.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list9.parentElement.previousElementSibling.src;
	imgupdate.src=list9.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
    var list10=document.querySelector('#list10');
    list10.parentElement.addEventListener('click', function(){
	audio.src=list10.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list10.innerHTML;
	artistname.innerHTML=list10.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list10.innerHTML;
	songArtist.innerHTML=list10.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list10.parentElement.previousElementSibling.src;
	imgupdate.src=list10.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list10.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list10.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list10.innerHTML;
	artistname.innerHTML=list10.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list10.innerHTML;
	songArtist.innerHTML=list10.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list10.parentElement.previousElementSibling.src;
	imgupdate.src=list10.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
      var list11=document.querySelector('#list11');
    list11.parentElement.addEventListener('click', function(){
	audio.src=list11.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list11.innerHTML;
	artistname.innerHTML=list11.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list11.innerHTML;
	songArtist.innerHTML=list11.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list11.parentElement.previousElementSibling.src;
	imgupdate.src=list11.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list11.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list11.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list11.innerHTML;
	artistname.innerHTML=list11.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list11.innerHTML;
	songArtist.innerHTML=list11.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list11.parentElement.previousElementSibling.src;
	imgupdate.src=list11.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
      var list12=document.querySelector('#list12');
    list12.parentElement.addEventListener('click', function(){
	audio.src=list12.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list12.innerHTML;
	artistname.innerHTML=list12.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list12.innerHTML;
	songArtist.innerHTML=list12.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list12.parentElement.previousElementSibling.src;
	imgupdate.src=list12.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list12.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list12.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list12.innerHTML;
	artistname.innerHTML=list12.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list12.innerHTML;
	songArtist.innerHTML=list12.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list12.parentElement.previousElementSibling.src;
	imgupdate.src=list12.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
      var list13=document.querySelector('#list13');
    list13.parentElement.addEventListener('click', function(){
	audio.src=list13.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list13.innerHTML;
	artistname.innerHTML=list13.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list13.innerHTML;
	songArtist.innerHTML=list13.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list13.parentElement.previousElementSibling.src;
	imgupdate.src=list13.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list13.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list13.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list13.innerHTML;
	artistname.innerHTML=list13.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list13.innerHTML;
	songArtist.innerHTML=list13.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list13.parentElement.previousElementSibling.src;
	imgupdate.src=list13.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
      var list14=document.querySelector('#list14');
    list14.parentElement.addEventListener('click', function(){
	audio.src=list14.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list14.innerHTML;
	artistname.innerHTML=list14.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list14.innerHTML;
	songArtist.innerHTML=list14.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list14.parentElement.previousElementSibling.src;
	imgupdate.src=list14.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list14.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list14.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list14.innerHTML;
	artistname.innerHTML=list14.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list14.innerHTML;
	songArtist.innerHTML=list14.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list14.parentElement.previousElementSibling.src;
	imgupdate.src=list14.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
      var list15=document.querySelector('#list15');
    list15.parentElement.addEventListener('click', function(){
	audio.src=list15.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list15.innerHTML;
	artistname.innerHTML=list15.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list15.innerHTML;
	songArtist.innerHTML=list15.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list15.parentElement.previousElementSibling.src;
	imgupdate.src=list15.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
})
    /* music image click effect */
    list15.parentElement.previousElementSibling.addEventListener('click', function(){
    audio.src=list15.nextElementSibling.innerHTML;
	playpausebtn.setAttribute('class','fa fa-pause fa-2x');
	musicimg.style.animationPlayState="running";
	musicname.innerHTML=list15.innerHTML;
	artistname.innerHTML=list15.nextElementSibling.nextElementSibling.innerHTML;
	songName.innerHTML=list15.innerHTML;
	songArtist.innerHTML=list15.nextElementSibling.nextElementSibling.innerHTML;
	musicimg.src=list15.parentElement.previousElementSibling.src;
	imgupdate.src=list15.parentElement.previousElementSibling.src;
	playx.setAttribute('class','fa fa-pause fa-2x');
	audio.play();
	musiccontainer.style.display="flex";
    })
	var playpausebtn=document.querySelector('#playpause');
	var audio=document.querySelector('.audio');
	var acti=1;
	var musicname=document.querySelector('.music-name');
	var artistname=document.querySelector('.artist-name');
	var playpausebtn=document.querySelector('#playpause');
	var playx=document.querySelector('#playx');
	var musicimg=document.querySelector('.music-img');
	var seek=document.querySelector('.seek');
	var seeker=document.querySelector('.seeker');
	var songName=document.querySelector('.songName');
	var songArtist=document.querySelector('.songArtist');
	var imgupdate=document.querySelector('.imgupdate');
	/* songs details */
	musicname.innerHTML=songlist[index].name;
	artistname.innerHTML=songlist[index].artist;
	var roll=1;
	var shuffer=1;
	var mute=document.querySelector('#mute');
	var shuffle=document.querySelector('#shuffle');
	shuffle.addEventListener('click',function(){
		if (shuffer==1) {
		shuffer=0;
		shuffle.setAttribute('class','fa fa-sync');
	}
	else{
		shuffer=1;
		shuffle.setAttribute('class','fa fa-shuffle');
	}
	})
    audio.src=songlist[index].path;
    musicimg.src=songlist[index].img;
    imgupdate.src=songlist[index].img;
    audio.pause();
	/* play and pause */
	playpausebtn.addEventListener('click',function() {
		if (acti==1) {
		playpausebtn.setAttribute('class','fa fa-pause fa-2x');
		playx.setAttribute('class','fa fa-pause fa-2x');
		audio.play();
	    musicimg.style.animationPlayState="running";
		acti+=1;
	}
	    else{
	    	playpausebtn.setAttribute('class','fa fa-play fa-2x');
	    	playx.setAttribute('class','fa fa-play fa-2x');
	    	acti-=1;
	    	audio.pause();
	    	musicimg.style.animationPlayState="paused";
	    }
	})
	playx.addEventListener('click',function() {
		if (acti==1) {
		playx.setAttribute('class','fa fa-pause fa-2x');
		playpausebtn.setAttribute('class','fa fa-pause fa-2x');
		audio.play();
	    musicimg.style.animationPlayState="running";
		acti+=1;
	}
	    else{
	    	playx.setAttribute('class','fa fa-play fa-2x');
	    	playpausebtn.setAttribute('class','fa fa-play fa-2x');
	    	acti-=1;
	    	audio.pause();
	    	musicimg.style.animationPlayState="paused";
	    }
	})
	/* forward */
	var forward=document.querySelector('#forwardbtn');
	forward.addEventListener('click', function(){
		playpausebtn.setAttribute('class','fa fa-pause fa-2x');
		playx.setAttribute('class','fa fa-pause fa-2x');
		if (shuffer==0) {
			index =Math.floor(Math.random()*(5-1))+1;
			audio.src=songlist[index].path;
		    audio.play();
		    /* songs details */
	        musicname.innerHTML=songlist[index].name;
	        artistname.innerHTML=songlist[index].artist;
	        songName.innerHTML=songlist[index].name;
	        songArtist.innerHTML=songlist[index].artist;
	        musicimg.src=songlist[index].img;
	        imgupdate.src=songlist[index].img;
		}
		if (songlist) {
		if (index==songlist.length) {
			index=-1;
			audio.src=songlist[index].path;
		    audio.play();
		    /* songs details */
	        musicname.innerHTML=songlist[index].name;
	        artistname.innerHTML=songlist[index].artist;
	        songName.innerHTML=songlist[index].name;
	        songArtist.innerHTML=songlist[index].artist;
	        musicimg.src=songlist[index].img;
	        imgupdate.src=songlist[index].img;
		}
		index+=1;
		audio.src=songlist[index].path;
		audio.play();
		/* songs details */
	    musicname.innerHTML=songlist[index].name;
	    artistname.innerHTML=songlist[index].artist;
	    songName.innerHTML=songlist[index].name;
	    songArtist.innerHTML=songlist[index].artist;
	    musicimg.src=songlist[index].img;
	    imgupdate.src=songlist[index].img;
	}
		musicimg.style.animationName="rollimg";
	})
	/* backward */
	var backward=document.querySelector('#backwardbtn');
	backward.addEventListener('click', function(){
		playpausebtn.setAttribute('class','fa fa-pause fa-2x');
		playx.setAttribute('class','fa fa-pause fa-2x');
		if (shuffer==0) {
			index =Math.floor(Math.random()*(5-1))+1;
			audio.src=songlist[index].path;
		    audio.play();
		    /* songs details */
	        musicname.innerHTML=songlist[index].name;
	        artistname.innerHTML=songlist[index].artist;
	        songName.innerHTML=songlist[index].name;
	        songArtist.innerHTML=songlist[index].artist;
	        musicimg.src=songlist[index].img;
	        imgupdate.src=songlist[index].img;
		}
		if (songlist) {
		if (index==0) {
			index=songlist.length;
			audio.src=songlist[index].path;
		    audio.play();
		    /* songs details */
	        musicname.innerHTML=songlist[index].name;
	        artistname.innerHTML=songlist[index].artist;
	        songName.innerHTML=songlist[index].name;
	        songArtist.innerHTML=songlist[index].artist;
	        musicimg.src=songlist[index].img;
	        imgupdate.src=songlist[index].img;
		}
		index-=1;
		audio.src=songlist[index].path;
		audio.play();
		/* songs details */
	    musicname.innerHTML=songlist[index].name;
	    artistname.innerHTML=songlist[index].artist;
	    songName.innerHTML=songlist[index].name;
	    songArtist.innerHTML=songlist[index].artist;
	    musicimg.src=songlist[index].img;
	    imgupdate.src=songlist[index].img;
	}
		musicimg.style.animationName="rollimg";
	})
	/* seek */
	seek.addEventListener('click',function(){
	seekto=audio.duration*(seek.value/100);
	audio.currentTime=seekto;
});
seek.value=0;
seeker.value=0;
var activate=1;
if (activate==1) {
var seekmove=setInterval(function(){
	seek.value=audio.currentTime*(100/audio.duration);
	seeker.value=audio.currentTime*(100/audio.duration);
	if(seek.value==100) {
		activate=0;
		seek.value=0;
		seeker.value=0;
		if (shuffer==0) {
			index =Math.floor(Math.random()*(5-1))+1;
			audio.src=songlist[index].path;
		    audio.play();
		    /* songs details */
	        musicname.innerHTML=songlist[index].name;
	        artistname.innerHTML=songlist[index].artist;
	        songName.innerHTML=songlist[index].name;
	        songArtist.innerHTML=songlist[index].artist;
	        musicimg.src=songlist[index].img;
	        imgupdate.src=songlist[index].img;

		}
		if (index==songlist.length) {
			index=-1;
			audio.src=songlist[index].path;
		    audio.play();
		    /* songs details */
	        musicname.innerHTML=songlist[index].name;
	        artistname.innerHTML=songlist[index].artist;
	        songName.innerHTML=songlist[index].name;
	        songArtist.innerHTML=songlist[index].artist;
	        musicimg.src=songlist[index].img;
	        imgupdate.src=songlist[index].img;
		}
		index+=1;
		audio.src=songlist[index].path;
		audio.play();
		/* songs details */
	    musicname.innerHTML=songlist[index].name;
	    artistname.innerHTML=songlist[index].artist;
	    songName.innerHTML=songlist[index].name;
	    songArtist.innerHTML=songlist[index].artist;
	    musicimg.src=songlist[index].img;
	    imgupdate.src=songlist[index].img;
		}
},1000)
}
seeker.addEventListener('click',function(){
	seekto2=audio.duration*(seeker.value/100);
	audio.currentTime=seekto2;
})
/* mute features */
var mutter=0;
mute.addEventListener('click',function(){
	if(mutter==0){
	audio.volume=0;
	mutter+=1;
	mute.setAttribute('class', 'fa fa-volume-mute');
}
else{
	audio.volume=1;
	mutter=0;
	mute.setAttribute('class','fas fa-volume-up');
}
})

/* preload */
var preloader=document.querySelector('.preload');
window.addEventListener('load',function(){
	setTimeout(function() {
		preloader.style.display="none";
	}, 2000);
})
 var listcontainer=document.querySelector('#list-container');
/* add media query */
/* download song */
var download=document.querySelectorAll('.download');
for(let d=0;d<download.length;d++){
	download[d].addEventListener('click', function(){
		window.location=download[d].previousElementSibling.innerHTML;
	})
}
/* login pop up */
var log=document.querySelectorAll('#log');
var formarea=document.querySelector('.formarea');
for( let l=0;l<log.length;l++){
log[l].addEventListener('click', function(){
	formarea.style.display="inline"
})
}
/* close the pop up */
function closer() {
	formarea.style.display="";
}
/* form logic */
var stop=0;
function validate() {
	if(stop==0){
	    let details=document.querySelector('.formdetails');
		details.innerHTML="Details does not matched any account";
		return false;
	}
}