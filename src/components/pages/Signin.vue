<template>
	<div>
		<b-container class="mt-5">
			<b-row align-h="center">
				<b-col cols="4">
					<b-form @submit="onSubmit" @reset="onReset" v-if="show">
						<b-form-group id="exampleInputGroup1"
							label="用户名:"
							label-for="exampleInput1"
							description="We'll never share your email with anyone else.">
							<b-form-input id="exampleInput1"
								type="email"
								v-model="form.email"
								required
								placeholder="">
							</b-form-input>
						</b-form-group>
						<b-form-group id="exampleInputGroup2"
							label="密码:"
							label-for="exampleInput2">
							<b-form-input id="exampleInput2"
								type="password"
								v-model="form.name"
								required
								placeholder="">
							</b-form-input>
						</b-form-group>
						<b-form-group id="exampleGroup4">
							<b-form-checkbox value="me">保持登陆5天</b-form-checkbox>
						</b-form-group>
						<b-button type="submit" class="w-100" variant="primary">登录</b-button>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
