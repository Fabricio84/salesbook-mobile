<template>
	<section>
		<header>
			Acessar
		</header>
		<main>
			<div>
				<label>Email</label>
				<input type="email" />	
			</div>
			<div>
				<label>Senha</label>
				<input type="password" />	
			</div>

			<div>
				<button type="button">Entrar</button>	
			</div>
		</main>
	</section>
</template>

<style scoped>
	header {
		font-size: 28px;
		line-height: 36px;
		font-weight: 400;
		margin-bottom: 40px;
	}

	main {
		padding-left: 24px;
		padding-right: 24px;
	}

	div {
		width: 100%;
		margin-bottom: 16px;
	}

	label {
		display: block;
		text-align: left;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
	}

	input {
		height: 30px;
		width: 100%;
	}

	button {
		width: 100%;
		height: 40px;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		margin-top: 32px;
	}
</style>