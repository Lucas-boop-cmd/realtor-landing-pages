{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red193\green193\blue193;\red24\green24\blue24;\red70\green137\blue204;
\red66\green179\blue255;\red202\green202\blue202;\red194\green126\blue101;\red212\green214\blue154;\red67\green192\blue160;
\red140\green211\blue254;\red183\green111\blue179;\red89\green138\blue67;\red167\green197\blue152;}
{\*\expandedcolortbl;;\cssrgb\c80000\c80000\c80000;\cssrgb\c12157\c12157\c12157;\cssrgb\c33725\c61176\c83922;
\cssrgb\c30980\c75686\c100000;\cssrgb\c83137\c83137\c83137;\cssrgb\c80784\c56863\c47059;\cssrgb\c86275\c86275\c66667;\cssrgb\c30588\c78824\c69020;
\cssrgb\c61176\c86275\c99608;\cssrgb\c77255\c52549\c75294;\cssrgb\c41569\c60000\c33333;\cssrgb\c70980\c80784\c65882;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 (\cf4 \cb3 \strokec4 function\cf2 \cb3 \strokec2 () \{\cb1 \
\cb3     \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 LocationId\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'h4BWchNdy6Wykng1FfTH'\cf2 \cb3 \strokec2 ;\cb1 \
\
\cb3     \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf8 \cb3 \strokec8 getAgentParameter\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  () \cf4 \cb3 \strokec4 =>\cf2 \cb3 \strokec2  \{\cb1 \
\cb3         \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 urlParams\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 new\cf2 \cb3 \strokec2  \cf9 \cb3 \strokec9 URLSearchParams\cf2 \cb3 \strokec2 (\cf10 \cb3 \strokec10 window\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 location\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 search\cf2 \cb3 \strokec2 );\cb1 \
\cb3         \cf11 \cb3 \strokec11 return\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 urlParams\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 get\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'agent'\cf2 \cb3 \strokec2 );\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 agent\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf8 \cb3 \strokec8 getAgentParameter\cf2 \cb3 \strokec2 (); \cf12 \cb3 \strokec12 // Define agent here\cf2 \cb1 \strokec2 \
\
\cb3     \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf8 \cb3 \strokec8 getAgent\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  () \cf4 \cb3 \strokec4 =>\cf2 \cb3 \strokec2  \{\cb1 \
\cb3         \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 agentValue\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 agent\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 ||\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'agent'\cf2 \cb3 \strokec2 ;\cb1 \
\cb3         \cf8 \cb3 \strokec8 searchAgentContact\cf2 \cb3 \strokec2 (\cf5 \cb3 \strokec5 agent\cf2 \cb3 \strokec2 );\cb1 \
\cb3         \cf11 \cb3 \strokec11 return\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 agentValue\cf2 \cb3 \strokec2 ;\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf8 \cb3 \strokec8 searchAgentContact\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 async\cf2 \cb3 \strokec2  (\cf10 \cb3 \strokec10 agent\cf2 \cb3 \strokec2 ) \cf4 \cb3 \strokec4 =>\cf2 \cb3 \strokec2  \{\cb1 \
\cb3         \cf11 \cb3 \strokec11 if\cf2 \cb3 \strokec2  (\cf6 \cb3 \strokec6 !\cf10 \strokec10 agent\cf2 \cb3 \strokec2 ) \{\cb1 \
\cb3             \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 error\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'Agent value is missing.'\cf2 \cb3 \strokec2 );\cb1 \
\cb3             \cf8 \cb3 \strokec8 updateAgentInfoDisplay\cf2 \cb3 \strokec2 (\cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 );\cb1 \
\cb3             \cf11 \cb3 \strokec11 return\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3         \}\cb1 \
\
\cb3         \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 log\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'Agent value:'\cf2 \cb3 \strokec2 , \cf10 \cb3 \strokec10 agent\cf2 \cb3 \strokec2 );\cb1 \
\cb3         \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 url\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'https://services.leadconnectorhq.com/contacts/search'\cf2 \cb3 \strokec2 ;\cb1 \
\
\cb3         \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 headers\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \{\cb1 \
\cb3             \cf7 \cb3 \strokec7 'Accept'\cf10 \strokec10 :\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'application/json'\cf2 \cb3 \strokec2 ,\cb1 \
\cb3             \cf7 \cb3 \strokec7 'Authorization'\cf10 \strokec10 :\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF1dGhDbGFzc0lkIjoiaDRCV2NoTmR5Nld5a25nMUZmVEgiLCJzb3VyY2UiOiJJTlRFR1JBVElPTiIsInNvdXJjZUlkIjoiNjdkNDk5YmQzZTRhOGMzMDc2ZDVlMzI5LW04OTlxYjRsIiwiY2hhbm5lbCI6Ik9BVVRIIiwicHJpbWFyeUF1dGhDbGFzc0lkIjoiaDRCV2NoTmR5Nld5a25nMUZmVEgiLCJvYXV0aE1ldGEiOnsic2NvcGVzIjpbImNvbnZlcnNhdGlvbnMucmVhZG9ubHkiLCJjb252ZXJzYXRpb25zLndyaXRlIiwiY29udmVyc2F0aW9ucy9tZXNzYWdlLnJlYWRvbmx5IiwiY29udmVyc2F0aW9ucy9tZXNzYWdlLndyaXRlIiwiY29udmVyc2F0aW9ucy9yZXBvcnRzLnJlYWRvbmx5IiwiY29udGFjdHMucmVhZG9ubHkiLCJjb250YWN0cy53cml0ZSIsInVzZXJzLnJlYWRvbmx5Iiwid29ya2Zsb3dzLnJlYWRvbmx5Iiwib3Bwb3J0dW5pdGllcy5yZWFkb25seSIsIm9wcG9ydHVuaXRpZXMud3JpdGUiXSwiY2xpZW50IjoiNjdkNDk5YmQzZTRhOGMzMDc2ZDVlMzI5IiwiY2xpZW50S2V5IjoiNjdkNDk5YmQzZTRhOGMzMDc2ZDVlMzI5LW04OTlxYjRsIn0sImlhdCI6MTc0MzA3OTgxOC40ODMsImV4cCI6MTc0MzE2NjIxOC40ODN9.xecj7qPxfBPn1gwsByzABVgnQ0TuXgl7NoLmhPOWjvPmEFWW6MQiTs76424p_OVWw2H_98mBV9PaRru1ANiiqaOdG5LjSE3lEPbegZJ4y8GairJ6-roS4qdml_SMPKgLkPB2DOkuwiPDZjMvYlQRHXKKt9FMtCtp6pzz3OLhuW7IybubLHdFzZVpolpTJY5kuMKWMqB7SfCdY-jopnzbiXg5ryqroonhW07n_gbqletv8WzcIRTPNAv0W22ombQzaNptdZc1fhWXPOjJv9wf7-YnO3V8b3fG2bDwJMKhdqFY1fNhD385hQJa2SCy4iEPiZpte_KEdPfmTwpqCZCpJA_J83aMZFvb-Bn4GNceCgaMkDLnqRZfDDHPXmOmpTsE9LP7aZiuxMYTHfkr2yOALCkQUj5bHaIrb541_nQFa2W_Fuw1Zs5NynhftLHr4-eVRNn2L5CGk6Qc7kJWk1gQndGdq8Rui7JChTm4Q6W5QvIwWpMP7uYHcclIQBUVX_QdjQf2mik34kIaJZeCnmjRJD6dNML5cgUvnc2IihRM6KrJ-mkoiArCc3_lV-9hBGeNuskd650wBUgknkFqddt2FQPxtiDZr_oO-WC4pQCJ7-u2Sh4VeKQTMshL9mDVjUhndJpC_Ahp-7NQwrr-Nub1MEqj8v31ZYioe1JLfBdxDkY`\cf2 \cb3 \strokec2 ,\cb1 \
\cb3             \cf7 \cb3 \strokec7 'Content-Type'\cf10 \strokec10 :\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'application/json'\cf2 \cb3 \strokec2 ,\cb1 \
\cb3             \cf7 \cb3 \strokec7 'Version'\cf10 \strokec10 :\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 '2021-07-28'\cf2 \cb1 \strokec2 \
\cb3         \};\cb1 \
\
\cb3         \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 data\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \{\cb1 \
\cb3             \cf10 \cb3 \strokec10 locationId:\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 LocationId\cf2 \cb3 \strokec2 , \cf12 \cb3 \strokec12 // Ensure locationId is included\cf2 \cb1 \strokec2 \
\cb3             \cf10 \cb3 \strokec10 page:\cf2 \cb3 \strokec2  \cf13 \cb3 \strokec13 1\cf2 \cb3 \strokec2 , \cf12 \cb3 \strokec12 // Add page field to specify the page number\cf2 \cb1 \strokec2 \
\cb3             \cf10 \cb3 \strokec10 pageLimit:\cf2 \cb3 \strokec2  \cf13 \cb3 \strokec13 10\cf2 \cb3 \strokec2 , \cf12 \cb3 \strokec12 // Set pageLimit to a valid number (e.g., 10)\cf2 \cb1 \strokec2 \
\cb3             \cf10 \cb3 \strokec10 filters:\cf2 \cb3 \strokec2  [\cb1 \
\cb3                 \{\cb1 \
\cb3                     \cf10 \cb3 \strokec10 field:\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'businessName'\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                     \cf10 \cb3 \strokec10 operator:\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'eq'\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                     \cf10 \cb3 \strokec10 value:\cf2 \cb3 \strokec2  \cf10 \cb3 \strokec10 agent\cf2 \cb3 \strokec2  \cf12 \cb3 \strokec12 // Ensure agent is passed correctly\cf2 \cb1 \strokec2 \
\cb3                 \}\cb1 \
\cb3             ]\cb1 \
\cb3         \};\cb1 \
\
\cb3         \cf11 \cb3 \strokec11 try\cf2 \cb3 \strokec2  \{\cb1 \
\cb3             \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 response\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf11 \cb3 \strokec11 await\cf2 \cb3 \strokec2  \cf8 \cb3 \strokec8 fetch\cf2 \cb3 \strokec2 (\cf5 \cb3 \strokec5 url\cf2 \cb3 \strokec2 , \{\cb1 \
\cb3                 \cf10 \cb3 \strokec10 method:\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'POST'\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                 \cf10 \cb3 \strokec10 headers:\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 headers\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                 \cf10 \cb3 \strokec10 body:\cf2 \cb3 \strokec2  \cf10 \cb3 \strokec10 JSON\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 stringify\cf2 \cb3 \strokec2 (\cf5 \cb3 \strokec5 data\cf2 \cb3 \strokec2 ) \cf12 \cb3 \strokec12 // Updated to match the sample\cf2 \cb1 \strokec2 \
\cb3             \});\cb1 \
\
\cb3             \cf11 \cb3 \strokec11 if\cf2 \cb3 \strokec2  (\cf6 \cb3 \strokec6 !\cf5 \strokec5 response\cf2 \cb3 \strokec2 .\cf5 \cb3 \strokec5 ok\cf2 \cb3 \strokec2 ) \{\cb1 \
\cb3                 \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 errorText\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf11 \cb3 \strokec11 await\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 response\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 text\cf2 \cb3 \strokec2 ();\cb1 \
\cb3                 \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 error\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 `HTTP error! status: \cf4 \strokec4 $\{\cf5 \strokec5 response\cf6 \strokec6 .\cf5 \strokec5 status\cf4 \strokec4 \}\cf7 \strokec7 , responseText:`\cf2 \cb3 \strokec2 , \cf5 \cb3 \strokec5 errorText\cf2 \cb3 \strokec2 );\cb1 \
\cb3                 \cf11 \cb3 \strokec11 throw\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 new\cf2 \cb3 \strokec2  \cf9 \cb3 \strokec9 Error\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 `HTTP error! status: \cf4 \strokec4 $\{\cf5 \strokec5 response\cf6 \strokec6 .\cf5 \strokec5 status\cf4 \strokec4 \}\cf7 \strokec7 `\cf2 \cb3 \strokec2 );\cb1 \
\cb3             \}\cb1 \
\
\cb3             \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 responseData\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf11 \cb3 \strokec11 await\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 response\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 json\cf2 \cb3 \strokec2 ();\cb1 \
\
\cb3             \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 log\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'Response Data:'\cf2 \cb3 \strokec2 , \cf5 \cb3 \strokec5 responseData\cf2 \cb3 \strokec2 ); \cf12 \cb3 \strokec12 // Added log\cf2 \cb1 \strokec2 \
\
\cb3             \cf11 \cb3 \strokec11 if\cf2 \cb3 \strokec2  (\cf5 \cb3 \strokec5 responseData\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 &&\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 responseData\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 contacts\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 &&\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 responseData\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 contacts\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 length\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 >\cf2 \cb3 \strokec2  \cf13 \cb3 \strokec13 0\cf2 \cb3 \strokec2 ) \{\cb1 \
\cb3                 \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 responseData\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 contacts\cf2 \cb3 \strokec2 [\cf13 \cb3 \strokec13 0\cf2 \cb3 \strokec2 ];\cb1 \
\cb3                 \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 log\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'Contact:'\cf2 \cb3 \strokec2 , \cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 ); \cf12 \cb3 \strokec12 // Added log\cf2 \cb1 \strokec2 \
\cb3                 \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 phone\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 phone\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 ||\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3                 \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 firstNameLowerCase\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 firstNameLowerCase\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 ||\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3                 \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 lastNameLowerCase\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 lastNameLowerCase\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 ||\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3                 \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 email\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 email\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 ||\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3                 \cf4 \cb3 \strokec4 let\cf2 \cb3 \strokec2  \cf10 \cb3 \strokec10 headshotURL\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\
\cb3                 \cf11 \cb3 \strokec11 if\cf2 \cb3 \strokec2  (\cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 customFields\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 &&\cf2 \cb3 \strokec2  \cf9 \cb3 \strokec9 Array\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 isArray\cf2 \cb3 \strokec2 (\cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 customFields\cf2 \cb3 \strokec2 )) \{\cb1 \
\cb3                     \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 headshotField\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 contact\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 customFields\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 find\cf2 \cb3 \strokec2 (\cf10 \cb3 \strokec10 field\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 =>\cf2 \cb3 \strokec2  \cf10 \cb3 \strokec10 field\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 key\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 ===\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'realtor_headshot'\cf2 \cb3 \strokec2 );\cb1 \
\cb3                     \cf10 \cb3 \strokec10 headshotURL\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 headshotField\cf2 \cb3 \strokec2 ?.\cf10 \cb3 \strokec10 value\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 ||\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3                 \}\cb1 \
\
\cb3                 \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 agentInfo\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \{\cb1 \
\cb3                     \cf10 \cb3 \strokec10 phone\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                     \cf10 \cb3 \strokec10 firstNameLowerCase\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                     \cf10 \cb3 \strokec10 lastNameLowerCase\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                     \cf10 \cb3 \strokec10 email\cf2 \cb3 \strokec2 ,\cb1 \
\cb3                     \cf10 \cb3 \strokec10 headshotURL\cf2 \cb1 \strokec2 \
\cb3                 \};\cb1 \
\
\cb3                 \cf8 \cb3 \strokec8 updateAgentInfoDisplay\cf2 \cb3 \strokec2 (\cf5 \cb3 \strokec5 agentInfo\cf2 \cb3 \strokec2 );\cb1 \
\cb3                 \cf11 \cb3 \strokec11 return\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 agentInfo\cf2 \cb3 \strokec2 ;\cb1 \
\cb3             \} \cf11 \cb3 \strokec11 else\cf2 \cb3 \strokec2  \{\cb1 \
\cb3                 \cf8 \cb3 \strokec8 updateAgentInfoDisplay\cf2 \cb3 \strokec2 (\cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 );\cb1 \
\cb3                 \cf11 \cb3 \strokec11 return\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3             \}\cb1 \
\cb3         \} \cf11 \cb3 \strokec11 catch\cf2 \cb3 \strokec2  (\cf10 \cb3 \strokec10 error\cf2 \cb3 \strokec2 ) \{\cb1 \
\cb3             \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 error\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'Error searching for agent contact:'\cf2 \cb3 \strokec2 , \cf10 \cb3 \strokec10 error\cf2 \cb3 \strokec2 );\cb1 \
\cb3             \cf8 \cb3 \strokec8 updateAgentInfoDisplay\cf2 \cb3 \strokec2 (\cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 );\cb1 \
\cb3             \cf11 \cb3 \strokec11 return\cf2 \cb3 \strokec2  \cf4 \cb3 \strokec4 null\cf2 \cb3 \strokec2 ;\cb1 \
\cb3         \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf8 \cb3 \strokec8 updateAgentInfoDisplay\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  (\cf10 \cb3 \strokec10 agentInfo\cf2 \cb3 \strokec2 ) \cf4 \cb3 \strokec4 =>\cf2 \cb3 \strokec2  \{\cb1 \
\cb3         \cf4 \cb3 \strokec4 const\cf2 \cb3 \strokec2  \cf5 \cb3 \strokec5 displayElement\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf10 \cb3 \strokec10 document\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 getElementById\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'agentInfoDisplay'\cf2 \cb3 \strokec2 );\cb1 \
\cb3         \cf11 \cb3 \strokec11 if\cf2 \cb3 \strokec2  (\cf6 \cb3 \strokec6 !\cf5 \strokec5 displayElement\cf2 \cb3 \strokec2 ) \{\cb1 \
\cb3             \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 error\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'Element with ID "agentInfoDisplay" not found.'\cf2 \cb3 \strokec2 );\cb1 \
\cb3             \cf11 \cb3 \strokec11 return\cf2 \cb3 \strokec2 ;\cb1 \
\cb3         \}\cb1 \
\
\cb3         \cf11 \cb3 \strokec11 if\cf2 \cb3 \strokec2  (\cf10 \cb3 \strokec10 agentInfo\cf2 \cb3 \strokec2 ) \{\cb1 \
\cb3             \cf10 \cb3 \strokec10 console\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 log\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 'Agent Info:'\cf2 \cb3 \strokec2 , \cf10 \cb3 \strokec10 agentInfo\cf2 \cb3 \strokec2 );\cb1 \
\cb3             \cf10 \cb3 \strokec10 document\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 querySelector\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 '#agentInfoDisplay .headshot img'\cf2 \cb3 \strokec2 ).\cf10 \cb3 \strokec10 src\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf10 \cb3 \strokec10 agentInfo\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 headshotURL\cf2 \cb3 \strokec2 ;\cb1 \
\cb3             \cf10 \cb3 \strokec10 document\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 querySelector\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 '#agentInfoDisplay h1'\cf2 \cb3 \strokec2 ).\cf10 \cb3 \strokec10 textContent\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 `\cf4 \strokec4 $\{\cf10 \strokec10 agentInfo\cf6 \strokec6 .\cf10 \strokec10 firstNameLowerCase\cf4 \strokec4 \}\cf7 \strokec7  \cf4 \strokec4 $\{\cf10 \strokec10 agentInfo\cf6 \strokec6 .\cf10 \strokec10 lastNameLowerCase\cf4 \strokec4 \}\cf7 \strokec7 `\cf2 \cb3 \strokec2 ;\cb1 \
\cb3             \cf10 \cb3 \strokec10 document\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 querySelector\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 '#agentInfoDisplay p'\cf2 \cb3 \strokec2 ).\cf10 \cb3 \strokec10 textContent\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf10 \cb3 \strokec10 agentInfo\cf2 \cb3 \strokec2 .\cf10 \cb3 \strokec10 phone\cf2 \cb3 \strokec2 ;\cb1 \
\cb3         \} \cf11 \cb3 \strokec11 else\cf2 \cb3 \strokec2  \{\cb1 \
\cb3             \cf10 \cb3 \strokec10 document\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 querySelector\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 '#agentInfoDisplay .headshot img'\cf2 \cb3 \strokec2 ).\cf10 \cb3 \strokec10 src\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 ''\cf2 \cb3 \strokec2 ;\cb1 \
\cb3             \cf10 \cb3 \strokec10 document\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 querySelector\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 '#agentInfoDisplay h1'\cf2 \cb3 \strokec2 ).\cf10 \cb3 \strokec10 textContent\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'No Agent Information Found'\cf2 \cb3 \strokec2 ;\cb1 \
\cb3             \cf10 \cb3 \strokec10 document\cf2 \cb3 \strokec2 .\cf8 \cb3 \strokec8 querySelector\cf2 \cb3 \strokec2 (\cf7 \cb3 \strokec7 '#agentInfoDisplay p'\cf2 \cb3 \strokec2 ).\cf10 \cb3 \strokec10 textContent\cf2 \cb3 \strokec2  \cf6 \cb3 \strokec6 =\cf2 \cb3 \strokec2  \cf7 \cb3 \strokec7 'Please check the agent parameter in the URL.'\cf2 \cb3 \strokec2 ;\cb1 \
\cb3         \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf8 \cb3 \strokec8 getAgent\cf2 \cb3 \strokec2 (); \cf12 \cb3 \strokec12 // Ensure this function call is properly closed\cf2 \cb1 \strokec2 \
\cb3 \})();\cb1 \
}