<script type="typescript">
	var showMoreSkillsButton = true;
	var skills = [
		{ name: 'HTML & CSS', progress: 95, icon: 'devicon-html5-plain' },
		{ name: 'Flutter', progress: 80, icon: 'devicon-flutter-plain' },
		{ name: 'Svelte Kit', progress: 60, icon: 'devicon-svelte-plain' },
		{ name: 'Linux', progress: 60, icon: 'devicon-linux-plain' },
		{ name: 'Java Script', progress: 50, icon: 'devicon-javascript-plain' }
	];

	var moreSkills = [
		{ name: 'Docker', progress: 40, icon: 'devicon-docker-plain' },
		{ name: 'Firebase', progress: 75, icon: 'devicon-firebase-plain' },
		{ name: 'Appwrite', progress: 90, icon: 'devicon-appwrite-plain' },
	];

	var projects = [
		{
			image: 'images/gradely2.png',
			title: 'Gradely 2',
			desc: "Gradely is beautiful grade monitoring app. Available for many OS's. \n Of course built with Flutter!",
			buttonText: 'Visit Gradely 2',
			buttonPath: 'https://github.com/generalxhd/Gradely2'
		},
		{
			image: 'images/kirchenfeld.png',
			title: 'Chilefäud app',
			desc: 'An app for my old school, to access the intern website over the app, also built with Flutter.',
			buttonText: 'Download Chilefäud',
			buttonPath: 'https://apps.eliasschneider.com/gymkirchenfeld'
		},
		{
			image: 'images/herospace.png',
			title: 'HeroSpace',
			desc: 'With <a href="https://weblit.ch" target="blank">Weblit</a>, I created a modern website for office rental.',
			buttonText: 'Visit HeroSpace',
			buttonPath: 'https://herospace.ch'
		},
		{
			image: 'images/coronaHand.png',
			title: 'CoronaHand.ch',
			desc: 'While the corona pandemic, I created a website for risk patients.',
			buttonText: 'Visit CoronaHand (Archive)',
			buttonPath: 'https://archive.eliasschneider.com/coronaHand'
		}
	];

	skills = skills.sort(function (a, b) {
		return b.progress - a.progress;
	});
</script>

<svelte:head>
	<title>Elias Schneider</title>
</svelte:head>

<!-- Import dev icons for skills -->

<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.13.0/devicon.min.css"
/>

<!-- About me -->

<section id="me">
	<div class="container pt-5">
		<div class="row align-items-center">
			<div class="container" />

			<div class="text-center col-3 pb-5">
				<div class="team-member">
					<img
						class="pb-image"
						id="img"
						src="/images/pb.png"
						alt="Elias Schneider"
						height="250px"
					/>
				</div>
			</div>

			<div class="col-lg-6 mx-auto text-center">
				<p class="text-left bigP">
					Hi, <br /> My name is Elias Schneider and I'm learning software engineering at
					<a class="bigP" target="blank" href="https://noseryoung.ch">Noser Young</a>. <br />
					<br />Currently I mostly develop apps with Flutter, but I want to learn as many
					programming languages as possible. <br /> <br /> Do you want to contribute in a project or
					do you have questions? Get in touch :)
				</p>

				<hr class="divider mt-5" />

				<a class="btn btn-primary iconButton" href="mailto:elias@eliasschneider.com"
					><i class="fas fa-at" /></a
				>

				<a class="btn btn-primary iconButton" target="blank" href="https://github.com/generalxhd"
					><i class="fab fa-github" /></a
				>
				<a
					class="btn btn-primary iconButton"
					target="blank"
					href="https://www.linkedin.com/in/elias-schneider-82887a21a/"
					><i class="fab fa-linkedin" /></a
				>
			</div>
		</div>
	</div>
</section>

<!-- My skills -->

<section id="skills">
	<h2>&lt; Skills /&gt;</h2>

	{#each skills as skill}
		<div class="row ">
			<div class="col-12 d-flex pt-2 pt-md-0">
				<i class={skill.icon} />
				<p>&nbsp;&nbsp;{skill.name}</p>
			</div>
			<div class="progress col-10">
				<div class="progress-bar" role="progressbar" style="width: {skill.progress + 4}%;" />
			</div>
			<p class="col-2 mobile-none">
				{#if skill.progress >= 90}
					Expert
				{:else if skill.progress >= 70}
					Advanced
				{:else if skill.progress >= 40}
					Intermediate
				{:else if skill.progress > 20}
					Beginner
				{:else if skill.progress <= 20}
					Newbie
				{/if}
			</p>
		</div>
	{/each}

	{#if showMoreSkillsButton}
		<div class="text-center">
			<button
				on:click={() => {
					skills = [...skills, ...moreSkills];
					skills = skills.sort(function (a, b) {
						return b.progress - a.progress;
					});
					showMoreSkillsButton = false;
				}}
				class="btn btn-primary mt-5 mt-md-0">Show {moreSkills.length} more skills...</button
			>
		</div>
	{/if}
</section>

<!-- My Projects -->

<section id="projects">
	<h2 class="lang">&lt; Projects /&gt;</h2>
	<div class="row ">
		{#each projects as project}
			<div class="card text-center col-lg-3 col-sm-12 mr-5 mb-5 ">
				<img
					class="card-img-top  pr-5 pl-5 pt-3"
					style="object-fit: contain"
					src={project.image}
					height="90px"
					alt={project.title}
				/>
				<div class="card-body  borderR20b ">
					<h5 class="card-title mt-1">{project.title}</h5>
					<p class="card-text mt-4">
						{@html project.desc}
					</p>
					{#if project.buttonText != ''}
						<a class="btn btn-primary mt-4" target="blank" href={project.buttonPath}
							>{project.buttonText}</a
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
