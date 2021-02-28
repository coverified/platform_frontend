<script>
    import {gql} from '@apollo/client';
    import {query} from 'svelte-apollo';
    import Loader from './Loader.svelte';

    const tagsInDb = JSON.parse(`[
  {
    "id": "01711908-575a-43b1-9ad3-d22875738159",
    "name": "/automotive and vehicles/vehicle rental",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.502",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.502",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "024a36b8-6ad6-4624-ae4c-ecd03b0ee816",
    "name": "/technology and computing/software/graphics software",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.07",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.07",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "0328a62b-2d2d-4c7b-aaa4-3f51b91b595e",
    "name": "/business and industrial/construction",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.455",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.455",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "058ea0ca-8ede-4141-a621-41f3b44bac23",
    "name": "/law, govt and politics/government",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.083",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.083",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "074fd2d7-28aa-4462-954a-9571c52df901",
    "name": "/law, govt and politics/government/legislative",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.688",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.688",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "07ee3625-435b-4927-b3fb-96dee0132f17",
    "name": "/business and industrial/business operations",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.553",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.553",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "08c70863-2167-4006-8aee-aacc689c77f5",
    "name": "/family and parenting/motherhood",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.816",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.816",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "0a644f49-c542-4ba1-a556-8f47d6ac66fa",
    "name": "/technology and computing/internet technology/internet cafes",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.283",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.283",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "0a8eaa90-98bc-4cec-ba7f-50ccedc432e4",
    "name": "/business and industrial/logistics/air freight",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.653",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.653",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "0f602449-2fef-4d5d-97b7-fc8f9f309675",
    "name": "/technology and computing/computer security/network security",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.375",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.375",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "183e43c3-3d3b-4177-bcd9-64cd2819bf0c",
    "name": "/finance/financial news",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.481",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.481",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "1879dd44-a726-4f19-9ec4-44ba4f07eae3",
    "name": "/business and industrial/energy/electricity",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.064",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.064",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "1b8063d2-7cbd-40f7-88ba-d1cacf2a348c",
    "name": "/automotive and vehicles/bicycles and accessories",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.487",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.487",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "1c813253-e2dd-4ff8-af66-9554309ad304",
    "name": "/business and industrial/business operations/management",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.678",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.678",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "1e1b9718-6b39-4a6a-8e61-15c4050fd2c1",
    "name": "/finance/grants, scholarships and financial aid/scholarships",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.365",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.365",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "203a4f84-c495-4e44-9298-5adbf7e45934",
    "name": "/automotive and vehicles/electric vehicles",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.91",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.91",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "2a7949db-95ea-4fa4-98cb-0351ec7af38f",
    "name": "/technology and computing/computer security/antivirus and malware",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.244",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.244",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "2d3f3546-8094-4693-82b0-5acf23ddc8d0",
    "name": "/art and entertainment/movies and tv/television",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.183",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.183",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "30d6dc79-2e22-46fd-948f-4a0cd3505239",
    "name": "/business and industrial/green solutions",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.98",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.98",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "33228ce2-0997-4814-abe0-c62fac06191b",
    "name": "/education/homeschooling",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.519",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.519",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "3377e0d1-50b6-499c-8adb-7b85f099b744",
    "name": "/health and fitness/disease/epidemic",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.64",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.64",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "340066d3-cbac-4e94-b918-c0d7bb182d57",
    "name": "/finance/investing/funds",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.548",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.548",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "34a68dd9-d712-4134-9d56-2ba51c80b083",
    "name": "/art and entertainment/movies",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.538",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.538",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "39bb44f6-9ddf-48f3-8925-0020a9dc51a7",
    "name": "/business and industrial/paper industry",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.995",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.995",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "39f03d61-b7fe-4ca6-aa92-18e8dcb8fb19",
    "name": "/careers/career planning",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.707",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.707",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "3b476ff8-b49d-4376-b5c4-30bc0c79d95d",
    "name": "/education",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.338",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.338",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "3c7e8758-3e07-45b1-82cd-a939894a7dfc",
    "name": "/society/work/unemployment",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.769",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.769",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "3d0926ef-1890-48a8-8c1e-af9a0a5d4b86",
    "name": "/business and industrial/energy/renewable energy",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.017",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.017",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "3d876fab-f0b9-43c0-a8a7-2c690653fae0",
    "name": "/technology and computing/computer crime",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.901",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.901",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "3e1c458e-fdd1-4a52-b108-3eefb50546a2",
    "name": "/society/unrest and war",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.823",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.823",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "408ef074-5a2a-4e14-840f-d4854a083789",
    "name": "/science/engineering",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.451",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.451",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "4a8ffb9a-66b2-4a4f-875f-94a007da9c52",
    "name": "/health and fitness/disease",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.474",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.474",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "59eac695-1c87-4c2d-be32-e5b5b7584ee0",
    "name": "/law, govt and politics/law enforcement",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.492",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.492",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "5a9cdafd-467e-4a89-8c9a-29541becea23",
    "name": "/health and fitness/men's health",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.447",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.447",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "5c0c4bba-7ab2-41aa-aab6-0e41936b087a",
    "name": "/technology and computing/networking",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.469",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.469",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "5c381e4d-9780-4617-a85a-238022b34645",
    "name": "/technology and computing/enterprise technology",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.497",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.497",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "5e371931-ebfd-4c89-9254-a97b95e06f44",
    "name": "/technology and computing/hardware/computer",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.631",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.631",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "5e860f93-dd6b-472e-91c4-d65c4e8f1664",
    "name": "/art and entertainment/dance/pole dancing",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.505",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.505",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "6340db10-b21d-4378-8fad-d65e6e3ab226",
    "name": "/business and industrial/logistics",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.895",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.895",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "69e3bdbc-51f8-4f83-ba4e-2d60a4232b5e",
    "name": "/technology and computing/internet technology/social network",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.392",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.392",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "6ef31f14-77cb-4786-9be0-cc85fc51fddb",
    "name": "/business and industrial/business operations/business plans",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.027",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.027",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "773f8487-c26f-4bad-b3db-c92eb5cb4ba2",
    "name": "/finance/investing",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.986",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.986",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "7ad854f8-c934-4d64-a036-c0a288109652",
    "name": "/technology and computing/networking/network monitoring and management",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.203",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.203",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "7f0a2617-894d-4822-aaa1-cae7f0685f13",
    "name": "/automotive and vehicles/vehicle brands",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.314",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.314",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "80d3674b-cb25-4715-907a-42971186a0fe",
    "name": "/news/national news",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.328",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.328",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "85aa22b2-be47-40b0-a433-6d225aca7d4f",
    "name": "/science",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.005",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.005",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "860bdeb4-671d-404c-9253-a0e00295fd1c",
    "name": "/law, govt and politics/government/parliament",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.668",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.668",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "8d2eb5ca-c05a-4acb-874a-947fdd05ef76",
    "name": "/business and industrial/energy/renewable energy/biofuel",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "8f5976b0-e535-4faa-aa38-24d2b8e6176d",
    "name": "/technology and computing/hardware/computer components",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.658",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.658",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "913f4084-ce4e-4d69-b52d-1d6b707f5700",
    "name": "/health and fitness/disease/cold and flu",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.972",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.972",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "918a99c7-f086-432c-8eab-7fc176f399fe",
    "name": "/business and industrial/business operations/management/business process",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.462",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.462",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "932cd1cf-10d1-4a40-b146-ceaba794c58f",
    "name": "/law, govt and politics/government/government contracting and procurement",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.426",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.426",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "994391e9-cbf6-4dbf-a83d-ebf9c62b8b21",
    "name": "/food and drink",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.74",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.74",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "9b88cd55-03f7-4a1b-8fca-a28921f67274",
    "name": "/automotive and vehicles/cars",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.086",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.086",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "a0184556-64b0-43cb-926c-9b7fc8bcb861",
    "name": "/technology and computing",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.511",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.511",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "a2096a20-b50f-4be4-81ad-eade59f4caaf",
    "name": "/law, govt and politics",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.535",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.535",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "a305e7a1-f002-4ea0-975a-04c917ecd139",
    "name": "/business and industrial/energy",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.525",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.525",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "a35dfd6e-1054-4526-8510-92ab66528d96",
    "name": "/automotive and vehicles/trucks and suvs/truck accessories",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.808",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.808",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "a38a1db9-e53a-4f35-b480-253b62ae7523",
    "name": "/art and entertainment/dance",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.515",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.515",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "a8fcff63-97b7-4454-bbd7-5871c6ff4139",
    "name": "/science/ecology/environmental disaster",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.364",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.364",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "aab4a705-2bf8-44cb-9f56-da0243a0d691",
    "name": "/health and fitness/disease/diabetes",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.303",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.303",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "aca49497-4c6c-4cfc-9094-53627b44c778",
    "name": "/business and industrial/war industry",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.489",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.489",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "ae6fa14f-df8c-4ab7-b46e-c4754e269f7d",
    "name": "/technology and computing/internet technology/isps",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.655",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.655",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "aede1c6d-1314-461c-85b5-ec2d5054dc6c",
    "name": "/automotive and vehicles/cars/hybrid",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.543",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.543",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "b289e6a3-d542-4098-bbb5-f1fae403f262",
    "name": "/health and fitness/disease/cancer/brain tumor",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.54",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.54",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "baf7a753-88e9-4652-8ee9-2b2e49e5977e",
    "name": "/education/special education",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.079",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.079",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "bd10fcf6-4b96-4ae4-8136-ad168a882316",
    "name": "/business and industrial/energy/nuclear power",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.847",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.847",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "bfa3fdb4-31e8-4a1e-b692-a4585f110dd0",
    "name": "/technology and computing/computer certification",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.258",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.258",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "c0c5adf6-0cab-49f5-869c-eb9c61f82750",
    "name": "/technology and computing/software",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.508",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.508",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "c1516dbe-85c4-4f82-b7be-6f4d6ea87e11",
    "name": "/technology and computing/internet technology",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.855",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.855",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "c1d6ba74-0dfb-4ad3-92b1-89d9002d9450",
    "name": "/business and industrial/energy/renewable energy/solar energy",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.074",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.074",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "c25dc30f-96ea-4ddf-88ea-c6e345e68a08",
    "name": "/finance/investing/beginning investing",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.66",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.66",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "c86a5fb9-f9d2-4856-a0c6-b07ac78295bb",
    "name": "/automotive and vehicles/vehicle brands/volkswagen",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.804",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.804",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "c884999c-3c4f-4464-9c6b-f57664d0df56",
    "name": "/technology and computing/hardware/computer peripherals",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.741",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.741",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "cf5b3288-9eaf-4ba3-9a9a-7de5de12fcec",
    "name": "/family and parenting/children",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.355",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.355",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "d1001923-6bcc-4f69-97ce-6ca7e455082f",
    "name": "/business and industrial/business software",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.431",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.431",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "d2710c0e-7354-47b2-9fe8-b6e4f425f4d3",
    "name": "/business and industrial/energy/nuclear power/nuclear accident",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.976",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.976",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "d6059b38-982e-4f1b-8cba-a05ce25efaba",
    "name": "/technology and computing/internet technology/web search/people search",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.444",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.444",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "d6caeb61-4ce0-45b1-9902-38004b2f7f59",
    "name": "/automotive and vehicles/cars/performance vehicles",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.671",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.671",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "da3fbf02-0fbe-4670-8953-22c95b203c59",
    "name": "/law, govt and politics/government/heads of state",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.415",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.415",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "daa59efb-be2e-4edf-a789-007dff51e051",
    "name": "/finance/grants, scholarships and financial aid/government grants",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.715",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.715",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "dc84e7b5-cd2c-47f7-856b-6c1bf0bf182f",
    "name": "/education/homework and study tips",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.412",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.412",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "df320159-49d8-484e-813d-bfc9a2b9e5ad",
    "name": "/business and industrial/automation",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.837",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.837",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "e3fea9cd-1b1b-4115-bdc6-f15a622695d0",
    "name": "/education/school",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.645",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.645",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "e46270b3-10d0-44e7-92d7-b2d77543ee8b",
    "name": "/education/studying business",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.528",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.528",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "e57ce093-04c0-413e-b4bd-20aec7d73069",
    "name": "/education/teaching and classroom resources",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.268",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.268",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "e5970ea4-a5fa-4894-be16-4e22bdee8e88",
    "name": "/finance/grants, scholarships and financial aid",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.013",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.013",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "e7d05ffe-657b-431a-a79d-929c76b6bae8",
    "name": "/automotive and vehicles",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.784",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.784",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "f3963a8c-a5cc-42ad-b6e1-4839540a113a",
    "name": "/education/high school",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.094",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.094",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "f3a0d3f0-198e-4bb2-91fb-94c6ce884ffd",
    "name": "/family and parenting/eldercare",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:34.673",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:34.673",
    "createdAt_offset": "+00:00"
  },
  {
    "id": "f44bf0cc-551f-4a92-8f5d-7b9d86e48855",
    "name": "/law, govt and politics/politics",
    "language": null,
    "description": null,
    "relevance": null,
    "image": null,
    "updatedAt_utc": "2021-02-28 11:16:33.684",
    "updatedAt_offset": "+00:00",
    "createdAt_utc": "2021-02-28 11:16:33.684",
    "createdAt_offset": "+00:00"
  }
]`);
    const tagMapping = {
        'Aus-, Fort- und Weiterbildung': [
            'education/adult education',
            'education/distance learning',
        ],
        'Außen-, Sicherheits- und Verteidigungspolitik': [
            'business and industrial/aerospace and defense',
        ],
        'Cybersicherheit': [
            'technology and computing/computer crime',
        ],
        'Digitale Transformation in der Wirtschaft': [
            'business and industrial/agriculture and forestry',
            'business and industrial/automation/robotics',
            'business and industrial/biomedical',
            'business and industrial/business operations/business plans',
            'business and industrial/business operations/human resources',
            'business and industrial/business operations/management/business process',
            'business and industrial/business operations/management/project management',
            'business and industrial/business operations/management/supply chain management',
            'business and industrial/business operations',
            'business and industrial/business software',
            'business and industrial/chemicals industry',
            'business and industrial/energy/electricity',
            'business and industrial/energy/renewable energy',
            'business and industrial/fashion industry',
            'business and industrial/food industry',
            'business and industrial/green solutions',
            'business and industrial/iron and steel industry',
            'business and industrial/logistics',
            'business and industrial/manufacturing',
            'business and industrial/metals',
            'business and industrial/mining industry',
            'business and industrial/paper industry',
            'business and industrial/pharmaceutical industry',
            'business and industrial/publishing',
            'business and industrial/record company',
            'business and industrial/shipbuilding',
            'business and industrial/tanning',
            'business and industrial/textile industry',
            'business and industrial/war industry/weaponry',
            'finance',
            'food and drink/gastronomy',
            'health and fitness',
        ],
        'Gesellschaft im digitalen Wandel': [
            'family and parenting',
            'family and parenting/children',
            'family and parenting/eldercare',
            'family and parenting/motherhood',
            'sports',
            'society/welfare',
            'society/teens',
            'society/unrest and war',
            'society/racism',
            'society/senior living',
            'society/crime',
            'society/dating',
            'shopping',
            'real estate',
            'hobbies and interests/getting published',
            'technology and computing/consumer electronics/telephones/mobile phones/smart phones',
            'technology and computing/consumer electronics',
        ],
        'gesellschaftliche Innovationen': [
            'hobbies and interests/inventors and patents',
        ],
        'Gesundheit': [
            'health and fitness',
            'health and fitness/disease',
            'food and drink/healthy eating',
        ],
        'Hochschulbildung': [
            'education/graduate school/college',
        ],
        'Innovationen': [
            'technology and computing/technological innovation',
        ],
        'international': [
            'news/international news',
        ],
        'internationale Sicherheitspolitik': [
            'business and industrial/aerospace and defense',
        ],
        'Internet der Dinge': [
            'home and garden/appliances',
            'home and garden/remodeling and construction',
            'style and fashion/jewelry',
            'style and fashion/footwear',
            'style and fashion/clothing',
            'style and fashion/accessories',
            'technology and computing/consumer electronics/audio equipment',
        ],
        'Infrastruktur und Ausstattung': [
            'technology and computing/computer crime',
            'technology and computing/computer security/antivirus and malware',
            'technology and computing/computer security/network security',
            'technology and computing/computer security',
            'technology and computing/data centers',
            'technology and computing/electronic components',
            'technology and computing/enterprise technology/data management',
            'technology and computing/hardware/computer/desktop computer',
            'technology and computing/hardware/computer/portable computer',
            'technology and computing/hardware/computer/servers',
            'technology and computing/hardware/computer',
            'technology and computing/hardware/computer components/chips and processors',
            'technology and computing/hardware/computer networking/router',
            'technology and computing/hardware/computer peripherals',
            'technology and computing/hardware',
            'technology and computing/internet technology',
            'technology and computing/networking',
            'technology and computing/operating systems',
            'technology and computing/programming languages',
            'technology and computing/software',
            'technology and computing/tech news',
            'technology and computing/technical support',
            'technology and computing/technological innovation',
        ],
        'Kultur und Medien': [
            'art and entertainment/books and literature',
            'art and entertainment/movies and tv/documentaries',
            'art and entertainment/movies and tv/television',
            'art and entertainment/music/musical instruments',
            'art and entertainment/music/recording industry',
            'art and entertainment/music',
            'art and entertainment/radio/podcasts',
            'art and entertainment/radio',
            'art and entertainment/shows and events/exhibition',
            'art and entertainment/shows and events/fair',
            'art and entertainment/visual art and design/design/industrial and product design',
            'art and entertainment/visual art and design/design/interior design',
            'art and entertainment/visual art and design',
            'art and entertainment/visual art and design/digital art',
        ],
        'Künstliche Intelligenz': [
            'science/computer science/artificial intelligence',
        ],
        'Mittelstand': [
            'food and drink/gastronomy',
        ],
        'Mobilität': [
            'automotive and vehicles/auto parts',
            'automotive and vehicles/bicycles and accessories',
            'automotive and vehicles/cars/car industry',
            'automotive and vehicles/scooters and mopeds',
            'automotive and vehicles',
            'travel',
        ],
        'Moderner Staat': [
            'law, govt and politics/government',
            'law, govt and politics/law enforcement',
            'law, govt and politics/legal issues',
            'law, govt and politics/espionage and intelligence',
        ],
        'Nachhaltigkeit': [
            'science/ecology',
        ],
        'Schulische Bildung': [
            'education/grade school',
            'education/graduate school',
            'education/high school',
            'education/homeschooling',
            'education/school',
        ],
        'Umwelt und Klima': [
            'science/ecology',
            'science/weather',
        ],
        'Verkehr und Mobilität': [
            'travel',
        ],
        'Wandel der Arbeitswelt': [
            'careers/career advice',
            'careers/career planning',
            'careers/job fairs',
            'careers/job search',
        ],
        'Wissenschaft und Technik': [
            'science/medicine',
            'science/social science',
            'science/physics',
            'science/mathematics',
            'science/geology',
            'science/geography',
            'science/ecology',
            'science/engineering',
            'science/computer science/artificial intelligence',
            'science/computer science/cryptography',
            'science/computer science/distributed systems',
            'science/computer science/information science',
            'science/computer science/software engineering',
            'science/computer science',
            'science/chemistry',
            'science/biology',
        ],
    };
    const mappedTags = [];

    // map tag names to id-lists
    Object.keys(tagMapping).forEach(key => {
        const obj = {
            name: key,
            ids: [],
        };

        tagMapping[key].forEach(tagName => {
            const tagFromDb = tagsInDb.find(tag => tag.name === `/${tagName}`);

            if (tagFromDb?.id) {
                obj.ids.push(tagFromDb.id);
            }
        });

        if (obj.ids.length) {
            mappedTags.push(obj);
        }
    });

    mappedTags.push({
        name: 'CoVerified',
        ids: [
            '0024a252-1951-408d-b44f-a6ea0615a278',
            '7b8cd0f4-c9f7-4f59-a568-2f7477fecff2',
        ],
    });

    export let selected = false;
    export let selectedIDs = false;
    export let textDefault = 'Schlagwort Filter';
    export let textAll = 'Alle Schlagworte';

    const changeSelectedTag = tag => {
        if (tag.name !== selected.name) {
            selected = tag;
            selectedIDs = tag.ids;
        } else {
            selected = false;
            selectedIDs = false;
        }
    };

    const allTags = query(gql`
        {
            allTags(sortBy: name_ASC) {
                name
                id
            }
        }
    `);
</script>

<div class="search__container">
    <p class="text-muted">Suche</p>
    <div class="search__input">
        <button class="btn btn--active mb-0" disabled>
            Digitalisierung
            <svg role="presentation">
                <use xlink:href="#close"></use>
            </svg>
        </button>
    </div>
    <hr/>
    <div class="search__tags">
        <div class="search__tags-controls">
            <p class="text-primary active">Digitalisierung</p>
            <p>Format</p>
            <p>Zeitraum</p>
            <p>Ministerien</p>
        </div>
        <p class="filteroptionen">Filteroptionen +</p>

        {#if $allTags.loading}
            <Loader/>
        {:else if $allTags.error}
            <p>
                Error loading items :(
            </p>
            <pre>
                <code>
                    {$allTags.error.message}
                </code>
            </pre>
        {:else}
            {#each mappedTags as item, index}
                {#if item.name !== 'CoVerified'}
                    <button
                            class={`btn${item.name === selected.name ? ' btn--active' : ''}`}
                            on:click={()=>{changeSelectedTag(item)}}
                    >
                        {item.name}
                        {#if item.name === selected.name}
                            <svg role="presentation">
                                <use xlink:href="#close"></use>
                            </svg>
                        {/if}
                    </button>
                {/if}
            {:else}
                <p>
                    No items found
                </p>
            {/each}
            {#each mappedTags as item, index}
                {#if item.name === 'CoVerified'}
                    <button
                            class={`btn bg-primary${item.name === selected.name ? ' btn--active' : ''}`}
                            on:click={()=>{changeSelectedTag(item)}}
                    >
                        {item.name}
                        {#if item.name === selected.name}
                            <svg role="presentation">
                                <use xlink:href="#close"></use>
                            </svg>
                        {/if}
                    </button>
                {/if}
            {/each}
        {/if}
    </div>
</div>

<style type="text/scss">
    .mb-0 {
        margin-bottom: 0 !important;
    }

    .search {
        &__container {
            background-color: #eeeff1;
            padding: 15px 30px 40px 45px;
        }

        &__input {
            position: relative;
            width: 100%;

            &:after {
                content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIyNCIKICAgaGVpZ2h0PSIyNCIKICAgdmlld0JveD0iMCAwIDUwMC4wMDAwMSA1MDAuMDAwMDEiCiAgIGlkPSJzdmc0MTYyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlNlYXJjaF9JY29uLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQxNjQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2VlZWZmMSIKICAgICBib3JkZXJjb2xvcj0iIzk3OTc5NyIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuOTU0IgogICAgIGlua3NjYXBlOmN4PSIyNTAiCiAgICAgaW5rc2NhcGU6Y3k9IjI1MCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjcwNiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDE2NyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNTUyLjM2MjE2KSI+CiAgICA8ZwogICAgICAgaWQ9ImcxNDAwIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuMzYwOTc5MywtNy42NzA0Nzg1KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNDcxNCIKICAgICAgICAgZD0iTSAyMzIuODM5NTIsNjE0Ljk2NzAyIEEgMTU0LjA0ODE2LDE1NC4wNDc5NCAwIDAgMCA3OC43OTE1Myw3NjkuMDEzODIgMTU0LjA0ODE2LDE1NC4wNDc5NCAwIDAgMCAyMzIuODM5NTIsOTIzLjA2MTg0IDE1NC4wNDgxNiwxNTQuMDQ3OTQgMCAwIDAgMzg2Ljg4NzUxLDc2OS4wMTM4MiAxNTQuMDQ4MTYsMTU0LjA0Nzk0IDAgMCAwIDIzMi44Mzk1Miw2MTQuOTY3MDIgWiBtIDAsMjYuNzc2MTMgQSAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMzYyLjc5ODMyLDc2OS4wMTM4MiAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMjMyLjgzOTUyLDg5Ni4yODQ0OSAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMTAyLjg4MTk0LDc2OS4wMTM4MiAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMjMyLjgzOTUyLDY0MS43NDMxNSBaIgogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6Izk3OTc5NztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICA8cmVjdAogICAgICAgICByeT0iMTguMDgzNDIiCiAgICAgICAgIHJ4PSIzMy4yNDk0NDMiCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNjUzMTY3NjgsMC43NTcyMTMzLC0wLjYwNjg5MDUxLDAuNzk0Nzg1NDUsMCwwKSIKICAgICAgICAgeT0iMzE5LjU1NDMyIgogICAgICAgICB4PSI3OTQuODc3NSIKICAgICAgICAgaGVpZ2h0PSIzNi4xNjY4NCIKICAgICAgICAgd2lkdGg9IjE3My4wMjY3NSIKICAgICAgICAgaWQ9InJlY3Q0NzIxIgogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6Izk3OTc5NztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==');
                position: absolute;
                right: 5px;
                bottom: 5px;
            }
        }

        &__tags {
            &-controls {
                display: flex;
                align-items: center;
                font-size: 24px;

                > p {
                    position: relative;

                    &:not(:last-of-type) {
                        margin-right: 80px;
                    }

                    &:after {
                        content: '⌵';
                        position: absolute;
                        font-size: 40px;
                        width: auto;
                        height: auto;
                        right: -35px;
                        color: #000;
                        top: -9px;
                    }

                    &.active {
                        &:after {
                            transform: rotate(180deg);
                            top: 8px;
                        }
                    }
                }
            }
        }
    }

    .text-primary {
        color: #0470ad;
    }

    .text-muted {
        font-size: 1rem;
        color: #004b76;
        margin-bottom: 22px;
    }

    hr {
        margin-top: 11px;
        margin-bottom: 18px;
        background-color: #979797;
        padding-left: 2px;
    }

    .btn {
        padding: 8px 14px;
        background-color: #bec5c9;
        border: solid 1px #bec5c9;
        font-size: 18px;
        margin: 0px 10px 10px 0;
        border-radius: 3px;
        cursor: pointer;
    }

    .btn--active {
        position: relative;
        background-color: #0470ad;
        border: solid 1px #0470ad;
        padding-right: 36px;
        color: #fff;
        font-family: inherit;

        svg {
            position: absolute;
            right: 12px;
            top: 50%;
            width: 18px;
            height: 18px;
            transform: translateY(-50%);
        }
    }

    .bg-primary {
        background-color: #3b55f2;
        border: solid 1px #3b55f2;
        color: var(--color-text-on-primary);
    }

    .filteroptionen {
        display: none;
        font-size: 24px;
        letter-spacing: 0.53px;
        color: #000;
        margin-top: 21px;
        margin-bottom: 28px;
    }

    @media (max-width: 992px) {
        .search {
            &__container {
                padding: 26px 12px 22px 24px;
            }

            &__tags {
                &-controls {
                    display: none;
                }
            }
        }

        .filteroptionen {
            display: block;
        }
    }

    @media (max-width: 768px) {
    }
</style>
