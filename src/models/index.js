// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, FoodDishes } = initSchema(schema);

export {
  Users,
  FoodDishes
};