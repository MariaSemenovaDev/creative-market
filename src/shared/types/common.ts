export type EntityId = string

export type RoutePath = string

export interface BaseEntity {
  id: EntityId
  createdAt?: string
  updatedAt?: string
}
