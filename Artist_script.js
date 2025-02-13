        // JavaScript for interactivity (you can add more as needed)
        document.addEventListener('DOMContentLoaded', () => {
            const playButton = document.querySelector('button.bg-green-500');
            const followButton = document.querySelector('button.bg-transparent');

            playButton.addEventListener('click', () => {
                alert('Playing music...');
            });

            followButton.addEventListener('click', () => {
                followButton.textContent = followButton.textContent === 'Follow' ? 'Following' : 'Follow';
                followButton.classList.toggle('bg-white');
                followButton.classList.toggle('text-black');
            });
        });


        document.addEventListener("DOMContentLoaded", function () {
            const urlParams = new URLSearchParams(window.location.search);
            const artistKey = urlParams.get("artist");
        
            const artists = {
                "arijit_singh": {
                    name: "Arijit Singh",
                    banner: "Images/weeknd.jpg",
                    listeners: "89,000,000 monthly listeners",
                    songs: [
                        { title: "Tum Hi Ho", duration: "4:22", image: "Images/weeknd.jpg" },
                        { title: "Raabta", duration: "3:45", image: "Images/weeknd.jpg" },
                        { title: "Agar Tum Saath Ho", duration: "5:41", image: "Images/weeknd.jpg" },
                        { title: "Tum Hi Ho", duration: "4:22", image: "Images/weeknd.jpg" },
                        { title: "Raabta", duration: "3:45", image: "Images/weeknd.jpg" },
                        { title: "Agar Tum Saath Ho", duration: "5:41", image: "Images/weeknd.jpg" },{ title: "Tum Hi Ho", duration: "4:22", image: "Images/weeknd.jpg" },
                        { title: "Raabta", duration: "3:45", image: "Images/weeknd.jpg" },
                        { title: "Agar Tum Saath Ho", duration: "5:41", image: "Images/weeknd.jpg" }

                    ],
                    suggested: [
                        { title: "Tum Hi Ho", duration: "4:22", image: "Images/weeknd.jpg" },
                        { title: "Raabta", duration: "3:45", image: "Images/weeknd.jpg" },
                        { title: "Agar Tum Saath Ho", duration: "5:41", image: "Images/weeknd.jpg" },
                        { title: "Tum Hi Ho", duration: "4:22", image: "Images/weeknd.jpg" }
                    ],
                    releases: [
                        { title: "Soulful Voice", year: "2023", image: "Images/weeknd.jpg" },
                        { title: "Soulful Voice", year: "2023", image: "Images/weeknd.jpg" },
                        { title: "Soulful Voice", year: "2023", image: "Images/weeknd.jpg" }
                    ]
                },
        
                "the_weeknd": {
                    name: "The Weeknd",
                    banner: "Images/Weeknd_Banner.jpg",
                    listeners: "123,873,105 monthly listeners",
                    songs: [
                        { title: "Blinding Lights", duration: "3:22", image: "Images/blindinglights.jpg" },
                        { title: "Starboy", duration: "3:50", image: "Images/starboy.jpg" },
                        { title: "Save Your Tears", duration: "3:35", image: "Images/saveyourtears.jpg" },
                        { title: "Blinding Lights", duration: "3:22", image: "Images/blindinglights.jpg" },
                        { title: "Starboy", duration: "3:50", image: "Images/starboy.jpg" },
                        { title: "Save Your Tears", duration: "3:35", image: "Images/saveyourtears.jpg" },
                        { title: "Blinding Lights", duration: "3:22", image: "Images/blindinglights.jpg" },
                        { title: "Starboy", duration: "3:50", image: "Images/starboy.jpg" },
                        { title: "Save Your Tears", duration: "3:35", image: "Images/saveyourtears.jpg" }
                    ],
                    suggested: [
                        { title: "God's Plan", artist: "Drake", image: "Images/godsplan.jpg" },
                        { title: "After Hours", artist: "The Weeknd", image: "Images/afterhours.jpg" }
                    ],
                    releases: [
                        { title: "Hurry Up Tomorrow", year: "2025", image: "Images/lastsong.jpg" },
                        { title: "Hurry Up Tomorrow", year: "2025", image: "Images/lastsong.jpg" },
                        { title: "Hurry Up Tomorrow", year: "2025", image: "Images/lastsong.jpg" }
                    ]
                },
        
                "ed_sheeran": {
                    name: "Ed Sheeran",
                    banner: "Images/Ed_Banner.jpg",
                    listeners: "97,560,210 monthly listeners",
                    songs: [
                        { title: "Perfect", duration: "4:23", image: "Images/perfect.jpg" },
                        { title: "Shape of You", duration: "3:53", image: "Images/shapeofyou.jpg" },
                        { title: "Thinking Out Loud", duration: "4:41", image: "Images/thinkingoutloud.jpg" },
                        { title: "Perfect", duration: "4:23", image: "Images/perfect.jpg" },
                        { title: "Shape of You", duration: "3:53", image: "Images/shapeofyou.jpg" },
                        { title: "Thinking Out Loud", duration: "4:41", image: "Images/thinkingoutloud.jpg" },
                        { title: "Perfect", duration: "4:23", image: "Images/perfect.jpg" },
                        { title: "Shape of You", duration: "3:53", image: "Images/shapeofyou.jpg" },
                        { title: "Thinking Out Loud", duration: "4:41", image: "Images/thinkingoutloud.jpg" }
                    ],
                    suggested: [
                        { title: "Photograph", artist: "Ed Sheeran", image: "Images/photograph.jpg" },
                        { title: "Castle on the Hill", artist: "Ed Sheeran", image: "Images/castleonthehill.jpg" }
                    ],
                    releases: [
                        { title: "Equals", year: "2021", image: "Images/equals.jpg" }
                    ]
                },
        
                "taylor_swift": {
                    name: "Taylor Swift",
                    banner: "Images/Taylor_Banner.jpg",
                    listeners: "120,670,300 monthly listeners",
                    songs: [
                        { title: "Love Story", duration: "3:57", image: "Images/lovestory.jpg" },
                        { title: "You Belong With Me", duration: "3:52", image: "Images/youbelongwithme.jpg" },
                        { title: "Shake It Off", duration: "3:39", image: "Images/shakeitoff.jpg" },
                        { title: "Love Story", duration: "3:57", image: "Images/lovestory.jpg" },
                        { title: "You Belong With Me", duration: "3:52", image: "Images/youbelongwithme.jpg" },
                        { title: "Shake It Off", duration: "3:39", image: "Images/shakeitoff.jpg" },
                        { title: "Love Story", duration: "3:57", image: "Images/lovestory.jpg" },
                        { title: "You Belong With Me", duration: "3:52", image: "Images/youbelongwithme.jpg" },
                        { title: "Shake It Off", duration: "3:39", image: "Images/shakeitoff.jpg" }
                    ],
                    suggested: [
                        { title: "Blank Space", artist: "Taylor Swift", image: "Images/blankspace.jpg" },
                        { title: "Anti-Hero", artist: "Taylor Swift", image: "Images/antihero.jpg" }
                    ],
                    releases: [
                        { title: "Midnights", year: "2022", image: "Images/midnights.jpg" }
                    ]
                },
        
                "dua_lipa": {
                    name: "Dua Lipa",
                    banner: "Images/DuaLipa_Banner.jpg",
                    listeners: "85,320,000 monthly listeners",
                    songs: [
                        { title: "Don't Start Now", duration: "3:03", image: "Images/dontstartnow.jpg" },
                        { title: "Levitating", duration: "3:23", image: "Images/levitating.jpg" },
                        { title: "New Rules", duration: "3:29", image: "Images/newrules.jpg" },
                        { title: "Don't Start Now", duration: "3:03", image: "Images/dontstartnow.jpg" },
                        { title: "Levitating", duration: "3:23", image: "Images/levitating.jpg" },
                        { title: "New Rules", duration: "3:29", image: "Images/newrules.jpg" },
                        { title: "Don't Start Now", duration: "3:03", image: "Images/dontstartnow.jpg" },
                        { title: "Levitating", duration: "3:23", image: "Images/levitating.jpg" },
                        { title: "New Rules", duration: "3:29", image: "Images/newrules.jpg" }
                    ],
                    suggested: [
                        { title: "Break My Heart", artist: "Dua Lipa", image: "Images/breakmyheart.jpg" },
                        { title: "One Kiss", artist: "Calvin Harris & Dua Lipa", image: "Images/onekiss.jpg" }
                    ],
                    releases: [
                        { title: "Future Nostalgia", year: "2020", image: "Images/futurenostalgia.jpg" }
                    ]
                },
        
                "bad_bunny": {
                    name: "Bad Bunny",
                    banner: "Images/BadBunny_Banner.jpg",
                    listeners: "75,000,000 monthly listeners",
                    songs: [
                        { title: "Dakiti", duration: "3:25", image: "Images/dakiti.jpg" },
                        { title: "Me Porto Bonito", duration: "3:39", image: "Images/meportobonito.jpg" },
                        { title: "Yonaguni", duration: "3:26", image: "Images/yonaguni.jpg" },
                        { title: "Dakiti", duration: "3:25", image: "Images/dakiti.jpg" },
                        { title: "Me Porto Bonito", duration: "3:39", image: "Images/meportobonito.jpg" },
                        { title: "Yonaguni", duration: "3:26", image: "Images/yonaguni.jpg" },
                        { title: "Dakiti", duration: "3:25", image: "Images/dakiti.jpg" },
                        { title: "Me Porto Bonito", duration: "3:39", image: "Images/meportobonito.jpg" },
                        { title: "Yonaguni", duration: "3:26", image: "Images/yonaguni.jpg" }
                    ],
                    suggested: [
                        { title: "Moscow Mule", artist: "Bad Bunny", image: "Images/moscowmule.jpg" },
                        { title: "Tití Me Preguntó", artist: "Bad Bunny", image: "Images/titimepregunto.jpg" }
                    ],
                    releases: [
                        { title: "Un Verano Sin Ti", year: "2022", image: "Images/unveranosinti.jpg" }
                    ]
                },

                "billie_eilish": {
                    name: "Billie Eilish",
                    banner: "Images/BillieEilish_Banner.jpg",
                    listeners: "94,000,000 monthly listeners",
                    songs: [
                        { title: "Bad Guy", duration: "3:14", image: "Images/badguy.jpg" },
                        { title: "Everything I Wanted", duration: "4:05", image: "Images/everythingiwanted.jpg" },
                        { title: "Happier Than Ever", duration: "4:58", image: "Images/happierthanever.jpg" },
                        { title: "Bad Guy", duration: "3:14", image: "Images/badguy.jpg" },
                        { title: "Everything I Wanted", duration: "4:05", image: "Images/everythingiwanted.jpg" },
                        { title: "Happier Than Ever", duration: "4:58", image: "Images/happierthanever.jpg" },
                        { title: "Bad Guy", duration: "3:14", image: "Images/badguy.jpg" },
                        { title: "Everything I Wanted", duration: "4:05", image: "Images/everythingiwanted.jpg" },
                        { title: "Happier Than Ever", duration: "4:58", image: "Images/happierthanever.jpg" }
                    ],
                    suggested: [
                        { title: "Therefore I Am", artist: "Billie Eilish", image: "Images/thereforeiam.jpg" },
                        { title: "No Time To Die", artist: "Billie Eilish", image: "Images/notimetoDie.jpg" }
                    ],
                    releases: [
                        { title: "Happier Than Ever", year: "2021", image: "Images/happierthaneveralbum.jpg" }
                    ]
                }
                
            };
        
            if (artists[artistKey]) {
                const artist = artists[artistKey];
        
                document.getElementById("artist-name").textContent = artist.name;
                document.getElementById("artist-banner").style.backgroundImage = `url(${artist.banner})`;
                document.getElementById("monthly-listeners").textContent = artist.listeners;
        
                let songHTML = "";
                artist.songs.forEach((song, index) => {
                    songHTML += `
                        <div class="flex items-center justify-between p-2 hover:bg-white/10 rounded-lg">
                            <div class="flex items-center gap-4">
                                <span class="font-bold text-gray-400 w-6">${index + 1}</span>
                                <img src="${song.image}" alt="Album Art" class="w-12 h-12 rounded">
                                <div>
                                    <p class="font-medium">${song.title}</p>
                                    <p class="text-sm text-gray-400">${artist.name}</p>
                                </div>
                            </div>
                            <span class="text-gray-400">${song.duration}</span>
                        </div>
                    `;
                });
                document.getElementById("song-list").innerHTML = songHTML;
        
                let suggestedHTML = "";
                    artist.suggested.forEach((track, index) => {
                        suggestedHTML += `
                            <div class="flex items-center justify-between p-2 hover:bg-white/10 rounded-lg">
                                <div class="flex items-center gap-4">
                                    <span class="font-bold text-gray-400 w-6">${index + 1}</span>
                                    <img src="${track.image}" alt="Album Art" class="w-12 h-12 rounded">
                                    <div>
                                        <p class="font-medium">${track.title}</p>
                                        <p class="text-sm text-gray-400">${track.artist}</p>
                                    </div>
                                </div>
                                <span class="text-gray-400">${track.duration}</span>
                            </div>
                        `;
                    });
                    document.getElementById("suggested-list").innerHTML = suggestedHTML;

        
                let releaseHTML = "";
                artist.releases.forEach((release) => {
                    releaseHTML += `
                        <div class="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
                            <img src="${release.image}" alt="Album Art" class="w-full aspect-square object-cover rounded-lg mb-4">
                            <h3 class="font-bold">${release.title}</h3>
                            <p class="text-sm text-gray-400">${release.year}</p>
                        </div>
                    `;
                });
                document.getElementById("releases-list").innerHTML = releaseHTML;
            }
            
        });
        