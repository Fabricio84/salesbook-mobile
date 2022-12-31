<template>
	<section>
		<header>
			Home
		</header>
		<main>
		</main>
	</section>
</template> 

<script>
import api from '../services/api.js'
export default {
  name: 'Home',
  data () {
    return {
  	  email: '',
  	  password: '',
  	  role: 'admin'
    } 
  },
  computed: {
    payload () {
  	  return {
  		  email: this.email,
  		  password: this.password,
  		  role: this.role
  		}
  	}
  },
  methods: {
    async authenticate () {
  	  const response = await api.post('/login', { ...this.payload })
  	  if (response.status === 200) {
  		  const { accessToken } = response.data

  		  this.$store.commit('setToken', accessToken)

  		  alert(this.$store.state.token)
  	  }
    }
  }
}
</script>

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