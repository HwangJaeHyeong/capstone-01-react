export type DevelopmentStackType = 'WEB_FRONTEND' | 'SERVER_BACKEND' | 'APP_CLIENT' | 'ETC'

export type ProjectRequireMemberType = {
  developmentStack: DevelopmentStackType
  recommendScore: number
  number: number
}

export type ProjectRequireMemberListType = ProjectRequireMemberType[]

export type ProjectType = 'WEB' | 'SERVER' | 'APP' | 'ETC'

export type ProjectItemType = {
  key: number
  title: string
  representativeImg?: any
  projectType: ProjectType
  popularScore: number
  requireMemberList: ProjectRequireMemberListType
  visitedNumber: number
}

export type ProjectListType = ProjectItemType[]

type ApplyProjectItemType = {
  status: 'PENDING' | 'BELONG' | 'REJECT'
} & ProjectItemType

export type ApplyProjectListType = ApplyProjectItemType[]

type ApplyMemberItemType = {
  userKey: number
  nickname: string
  developmentStack: DevelopmentStackType
  questionnaireScore: number
}

type ApplyMemberListType = ApplyMemberItemType[]

type ManageProjectItemType = {
  applyMemberList: ApplyMemberListType
} & ProjectItemType

export type ManageProjectListType = ManageProjectItemType[]

export type UserInfoType = {
  nickname: string
  introduce: string
  developmentStack: DevelopmentStackType
  questionnaireKey: number
  questionnaireVersion: number
  questionnaireScore: number
}
