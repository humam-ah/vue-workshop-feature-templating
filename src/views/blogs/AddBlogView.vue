<template>
    <div>
        <header
            class="masthead"
            style="background-image: url('/img/post-sample-image.jpg')"
        >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Ashaq Blog</h1>
                            <span class="subheading"
                                >A Blog Theme by Ashaq Corp.</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <form @submit.prevent="submitData">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input
                            v-model="title"
                            type="text"
                            class="form-control"
                            placeholder="Enter your title here"
                            id="title"
                            aria-describedby="title"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">Content</label>
                        <textarea
                            v-model="body"
                            rows="8"
                            class="form-control"
                            placeholder="Leave a content here"
                            id="body"
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mb-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            body: "",
        };
    },

    methods: {
        submitData(){
            if(this.title != '' && this.body != ''){
                var array = JSON.parse(localStorage.getItem("blogs"));

                const data = {
                    id: array[array.length - 1].id +1,
                    title: this.title,
                    body: this.body,
                };

                array.push(data);
                localStorage.setItem('blogs', JSON.stringify(array));
                this.$router.push({name: "blogs"});
            }
        },
    },

};
</script>
