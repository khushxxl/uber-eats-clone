import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerFoodDishes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodDishes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly price?: number | null;
  readonly kcal?: number | null;
  readonly desc?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodDishes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodDishes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly price?: number | null;
  readonly kcal?: number | null;
  readonly desc?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FoodDishes = LazyLoading extends LazyLoadingDisabled ? EagerFoodDishes : LazyFoodDishes

export declare const FoodDishes: (new (init: ModelInit<FoodDishes>) => FoodDishes) & {
  copyOf(source: FoodDishes, mutator: (draft: MutableModel<FoodDishes>) => MutableModel<FoodDishes> | void): FoodDishes;
}