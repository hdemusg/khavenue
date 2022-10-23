const data = ['{"locations": [["1715 Howell Mill Rd NW, Atlanta, GA, 30318", 
39.31254214608278]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, GA, 
30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
36.67712203094848]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
36.67712203094848], ["1225 Caroline St NE, Atlanta, GA, 30307", 
32.365995968914355]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
36.67712203094848], ["1225 Caroline St NE, Atlanta, GA, 30307", 
32.365995968914355], ["1799 Briarcliff Rd NE, Atlanta, GA, 30306", 
30.0]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, GA, 30318", 
35.31254214608278]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 26.0]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, GA, 
30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 26.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
30.881944873189084]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 26.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
30.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
39.12523049021518]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 26.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
30.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
39.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
32.839040974385206]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 26.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
30.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
39.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
32.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
32.67712203094848]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 26.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
30.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
39.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
32.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
32.67712203094848], ["1225 Caroline St NE, Atlanta, GA, 30307", 
28.365995968914355]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 35.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
33.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
29.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 26.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
30.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
39.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
32.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
32.67712203094848], ["1225 Caroline St NE, Atlanta, GA, 30307", 
28.365995968914355], ["1799 Briarcliff Rd NE, Atlanta, GA, 30306", 
26.0]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, GA, 30318", 
39.31254214608278]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, GA, 
30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
36.67712203094848]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
36.67712203094848], ["1225 Caroline St NE, Atlanta, GA, 30307", 
32.365995968914355]]}', '{"locations": [["1715 Howell Mill Rd NW, Atlanta, 
GA, 30318", 39.31254214608278], ["590 Cascade Ave SW, Atlanta, GA, 30310", 
38.95412538120716], ["1700 Monroe Drive NE, Atlanta, GA, 30324", 
33.881944873189084], ["725 Ponce de Leon Ave NESuite 100, Atlanta, GA, 
30306", 30.0], ["2452 Morosgo Way, Atlanta, GA, 30324", 
33.881944873189084], ["4715 S Atlanta Road, Smyrna, GA, 30339", 
44.12523049021518], ["800 Glenwood Avenue, SE, Atlanta, GA, 30316", 
36.839040974385206], ["3330 Piedmont Rd NE, Atlanta, GA, 30305", 
36.67712203094848], ["1225 Caroline St NE, Atlanta, GA, 30307", 
32.365995968914355], ["1799 Briarcliff Rd NE, Atlanta, GA, 30306", 
30.0]]}']