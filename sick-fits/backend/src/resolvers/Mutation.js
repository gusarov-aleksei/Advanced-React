const Mutations = {

    async createItem(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createItem({
            data: {...args}
        }, info);
        return item;
    }
};

        /*global.dogs = global.dogs || [];
        //create a dog
        const newDog = {name: args.name};
        global.dogs.push(newDog);
        return newDog;*/

module.exports = Mutations;
