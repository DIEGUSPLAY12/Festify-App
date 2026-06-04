export type FieldDefinition = {
  name: string;
  type: string; // uuid, string, int, bool, enum, timestamp, jsonb, point
  constraints: string[]; // PK, FK, UK, NOT NULL, etc.
  description: string;
};

export type RelationDefinition = {
  table: string;
  type: string;
  description: string;
};

export type TableDefinition = {
  id: string;
  name: string;
  domain: string;
  description: string;
  fields: FieldDefinition[];
  relations: RelationDefinition[];
  designNotes?: string;
  prismaSchema: string;
};

export type Domain = {
  id: string;
  name: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  tables: string[];
  description: string;
  techBadge: string;
};

export const DOMAINS: Domain[] = [
  {
    id: "identity",
    name: "Identidad y Usuarios",
    color: "violet-500",
    textColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/10",
    tables: ["users", "friendships", "subscriptions"],
    description: "Gestión completa de cuentas, autenticación OAuth2, sistema de amigos y planes de suscripción vinculados a Stripe.",
    techBadge: "3 tablas"
  },
  {
    id: "groups",
    name: "Grupos y Social",
    color: "emerald-600",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-600/30",
    bgColor: "bg-emerald-600/10",
    tables: ["groups", "group_members"],
    description: "Grupos privados de amigos con roles de administrador, sistema de invitación por QR o enlace y privacidad configurable.",
    techBadge: "2 tablas"
  },
  {
    id: "content",
    name: "Contenido: Noches",
    color: "blue-500",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    tables: ["posts", "consumptions", "post_photos", "post_tags", "reactions", "comments"],
    description: "El núcleo del producto. Publicaciones de noches con bebidas, fotos con soporte dual BeReal, etiquetas de amigos y sistema de reacciones.",
    techBadge: "6 tablas"
  },
  {
    id: "gamification",
    name: "Gamificación",
    color: "amber-500",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/10",
    tables: ["mvp_votes", "mvp_results", "achievements", "user_achievements", "group_rankings"],
    description: "Sistema de votación MVP post-fiesta, catálogo de logros desbloqueables y rankings desnormalizados actualizados por jobs asíncronos en Redis.",
    techBadge: "5 tablas"
  },
  {
    id: "chat",
    name: "Chat y Eventos",
    color: "pink-500",
    textColor: "text-pink-400",
    borderColor: "border-pink-500/30",
    bgColor: "bg-pink-500/10",
    tables: ["messages", "message_reactions", "message_reads", "polls", "poll_options", "poll_votes", "events", "event_rsvps"],
    description: "Chat en tiempo real con WebSockets por grupo, reacciones, estado de lectura, encuestas integradas y planificación de eventos con confirmación de asistencia.",
    techBadge: "8 tablas"
  },
  {
    id: "business",
    name: "Negocio y Sistema",
    color: "green-400",
    textColor: "text-green-400",
    borderColor: "border-green-400/30",
    bgColor: "bg-green-400/10",
    tables: ["recaps", "notifications", "reports"],
    description: "Recaps mensuales y anuales con stats en JSONB, sistema de notificaciones push y moderación de contenido.",
    techBadge: "3 tablas"
  }
];

export const DATABASE_STATS = {
  totalTables: 22,
  domains: 6,
  database: "PostgreSQL + Prisma",
  cache: "Redis"
};

export const RELATIONS_ERD = `
  USERS ||--o{ POSTS : "crea"
  USERS ||--o{ GROUP_MEMBERS : "pertenece"
  USERS ||--o{ FRIENDSHIPS : "tiene amigos"
  USERS ||--o{ USER_ACHIEVEMENTS : "desbloquea"
  USERS ||--o{ MVP_VOTES : "vota"
  USERS ||--o{ REACTIONS : "reacciona"
  USERS ||--o{ COMMENTS : "comenta"
  USERS ||--o{ MESSAGES : "envía"
  USERS ||--o{ NOTIFICATIONS : "recibe"
  USERS ||--o{ EVENT_RSVPS : "confirma"
  USERS ||--o{ RECAPS : "tiene"
  USERS ||--|| SUBSCRIPTIONS : "suscripción"
  GROUPS ||--o{ GROUP_MEMBERS : "tiene"
  GROUPS ||--o{ POSTS : "agrupa"
  GROUPS ||--o{ EVENTS : "organiza"
  GROUPS ||--o{ MESSAGES : "chat"
  GROUPS ||--o{ GROUP_RANKINGS : "ranking"
  POSTS ||--o{ CONSUMPTIONS : "registra"
  POSTS ||--o{ POST_PHOTOS : "tiene fotos"
  POSTS ||--o{ POST_TAGS : "etiqueta"
  POSTS ||--o{ REACTIONS : "recibe"
  POSTS ||--o{ COMMENTS : "tiene"
  POSTS ||--o{ MVP_VOTES : "genera"
  MESSAGES ||--o{ MESSAGE_REACTIONS : "reacciones"
  MESSAGES ||--o{ MESSAGE_READS : "lecturas"
  POLLS ||--o{ POLL_OPTIONS : "opciones"
  POLLS ||--o{ POLL_VOTES : "votos"
  EVENTS ||--o{ EVENT_RSVPS : "asistentes"
  ACHIEVEMENTS ||--o{ USER_ACHIEVEMENTS : "desbloqueado en"
`;

export const TABLES: TableDefinition[] = [
  {
    id: "users",
    name: "USERS",
    domain: "identity",
    description: "Almacena los datos principales de los usuarios, sus credenciales y preferencias de cuenta.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "Identificador único del usuario" },
      { name: "username", type: "string", constraints: ["UK", "NOT NULL"], description: "Nombre de usuario (handle)" },
      { name: "email", type: "string", constraints: ["UK", "NOT NULL"], description: "Correo electrónico" },
      { name: "phone", type: "string", constraints: [], description: "Número de teléfono" },
      { name: "password_hash", type: "string", constraints: ["NOT NULL"], description: "Hash de la contraseña" },
      { name: "display_name", type: "string", constraints: [], description: "Nombre a mostrar en el perfil" },
      { name: "bio", type: "string", constraints: [], description: "Biografía corta del usuario" },
      { name: "avatar_url", type: "string", constraints: [], description: "URL de la foto de perfil" },
      { name: "city", type: "string", constraints: [], description: "Ciudad principal" },
      { name: "birth_date", type: "date", constraints: ["NOT NULL"], description: "Fecha de nacimiento" },
      { name: "visibility", type: "enum", constraints: ["NOT NULL"], description: "public | friends | private" },
      { name: "is_premium", type: "bool", constraints: ["NOT NULL"], description: "Indica si tiene suscripción activa" },
      { name: "is_verified_age", type: "bool", constraints: ["NOT NULL"], description: "Mayoría de edad verificada" },
      { name: "invisible_mode", type: "bool", constraints: ["NOT NULL"], description: "Modo ninja para no aparecer online" },
      { name: "two_fa_enabled", type: "bool", constraints: ["NOT NULL"], description: "Doble factor activado" },
      { name: "two_fa_secret", type: "string", constraints: [], description: "Secreto para 2FA" },
      { name: "auth_provider", type: "enum", constraints: ["NOT NULL"], description: "email | google | apple" },
      { name: "provider_id", type: "string", constraints: [], description: "ID del proveedor externo" },
      { name: "last_seen_at", type: "timestamp", constraints: [], description: "Última conexión" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "Fecha de registro" },
      { name: "updated_at", type: "timestamp", constraints: ["NOT NULL"], description: "Última actualización" }
    ],
    relations: [
      { table: "POSTS", type: "one-to-many", description: "Un usuario puede crear múltiples publicaciones" },
      { table: "GROUP_MEMBERS", type: "one-to-many", description: "Un usuario puede pertenecer a varios grupos" },
      { table: "FRIENDSHIPS", type: "one-to-many", description: "Un usuario tiene muchos amigos" }
    ],
    prismaSchema: `model User {
  id              String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  username        String    @unique
  email           String    @unique
  phone           String?
  passwordHash    String    @map("password_hash")
  displayName     String?   @map("display_name")
  bio             String?
  avatarUrl       String?   @map("avatar_url")
  city            String?
  birthDate       DateTime  @db.Date @map("birth_date")
  visibility      Visibility @default(PUBLIC)
  isPremium       Boolean   @default(false) @map("is_premium")
  isVerifiedAge   Boolean   @default(false) @map("is_verified_age")
  invisibleMode   Boolean   @default(false) @map("invisible_mode")
  twoFaEnabled    Boolean   @default(false) @map("two_fa_enabled")
  twoFaSecret     String?   @map("two_fa_secret")
  authProvider    AuthProvider @default(EMAIL) @map("auth_provider")
  providerId      String?   @map("provider_id")
  lastSeenAt      DateTime? @map("last_seen_at")
  createdAt       DateTime  @default(now()) @map("created_at")
  updatedAt       DateTime  @updatedAt @map("updated_at")

  // Relations
  posts           Post[]
  groupMembers    GroupMember[]
  friendships     Friendship[] @relation("UserFriendships")
  achievements    UserAchievement[]
  mvpVotes        MvpVote[]
  reactions       Reaction[]
  comments        Comment[]
  messages        Message[]
  notifications   Notification[]
  eventRsvps      EventRsvp[]
  recaps          Recap[]
  subscription    Subscription?

  @@map("users")
}`
  },
  {
    id: "groups",
    name: "GROUPS",
    domain: "groups",
    description: "Representa a una squad o grupo de amigos privado.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "ID del grupo" },
      { name: "name", type: "string", constraints: ["NOT NULL"], description: "Nombre del grupo" },
      { name: "description", type: "string", constraints: [], description: "Descripción opcional" },
      { name: "avatar_url", type: "string", constraints: [], description: "Foto del grupo" },
      { name: "privacy", type: "enum", constraints: ["NOT NULL"], description: "invite_only | public" },
      { name: "created_by", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Usuario creador" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "Creación" },
      { name: "updated_at", type: "timestamp", constraints: ["NOT NULL"], description: "Actualización" }
    ],
    relations: [
      { table: "GROUP_MEMBERS", type: "one-to-many", description: "Un grupo tiene muchos miembros" },
      { table: "POSTS", type: "one-to-many", description: "Un grupo agrupa múltiples posts" },
      { table: "MESSAGES", type: "one-to-many", description: "Un grupo tiene un chat con mensajes" }
    ],
    prismaSchema: `model Group {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name        String
  description String?
  avatarUrl   String?  @map("avatar_url")
  privacy     GroupPrivacy @default(INVITE_ONLY)
  createdBy   String   @map("created_by") @db.Uuid
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  members     GroupMember[]
  posts       Post[]
  events      Event[]
  messages    Message[]
  rankings    GroupRanking[]

  @@map("groups")
}`
  },
  {
    id: "group_members",
    name: "GROUP_MEMBERS",
    domain: "groups",
    description: "Tabla intermedia que vincula a usuarios con grupos, almacenando su rol.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "ID del vínculo" },
      { name: "group_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Referencia al grupo" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Referencia al usuario" },
      { name: "role", type: "enum", constraints: ["NOT NULL"], description: "admin | member" },
      { name: "joined_at", type: "timestamp", constraints: ["NOT NULL"], description: "Fecha de unión al grupo" }
    ],
    relations: [
      { table: "GROUPS", type: "many-to-one", description: "Pertenece a un grupo" },
      { table: "USERS", type: "many-to-one", description: "Pertenece a un usuario" }
    ],
    prismaSchema: `model GroupMember {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  groupId   String   @map("group_id") @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  role      GroupRole @default(MEMBER)
  joinedAt  DateTime @default(now()) @map("joined_at")

  group     Group    @relation(fields: [groupId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([groupId, userId])
  @@map("group_members")
}`
  },
  {
    id: "friendships",
    name: "FRIENDSHIPS",
    domain: "identity",
    description: "Relación de amigos entre usuarios, manejando estados de solicitud.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "ID de la amistad" },
      { name: "requester_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Usuario que envía petición" },
      { name: "addressee_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Usuario que la recibe" },
      { name: "status", type: "enum", constraints: ["NOT NULL"], description: "pending | accepted | blocked" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "Fecha de solicitud" },
      { name: "updated_at", type: "timestamp", constraints: ["NOT NULL"], description: "Fecha de aceptación/bloqueo" }
    ],
    relations: [
      { table: "USERS", type: "many-to-one", description: "Vinculado al requester y addressee" }
    ],
    prismaSchema: `model Friendship {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  requesterId String   @map("requester_id") @db.Uuid
  addresseeId String   @map("addressee_id") @db.Uuid
  status      FriendshipStatus @default(PENDING)
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  requester   User     @relation("UserFriendships", fields: [requesterId], references: [id], onDelete: Cascade)
  // Nota: en un caso real se añaden ambas direcciones o se normaliza.

  @@unique([requesterId, addresseeId])
  @@map("friendships")
}`
  },
  {
    id: "posts",
    name: "POSTS",
    domain: "content",
    description: "Publicación central de una noche de fiesta, agrupa fotos, estado y consumiciones.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "ID del post" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Autor del post" },
      { name: "group_id", type: "uuid", constraints: ["FK"], description: "Grupo donde se publica (opcional)" },
      { name: "note", type: "string", constraints: [], description: "Texto o comentario de la noche" },
      { name: "rating", type: "int", constraints: [], description: "Valoración de la noche (1-10)" },
      { name: "mood", type: "enum", constraints: [], description: "epic | chill | chaotic | memorable | meh" },
      { name: "location_name", type: "string", constraints: [], description: "Nombre del local/discoteca" },
      { name: "location_coords", type: "point", constraints: [], description: "Coordenadas GPS" },
      { name: "visibility", type: "enum", constraints: ["NOT NULL"], description: "public | friends | group | private" },
      { name: "night_date", type: "timestamp", constraints: ["NOT NULL"], description: "Fecha real de la noche" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" },
      { name: "updated_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [
      { table: "POST_PHOTOS", type: "one-to-many", description: "Contiene varias fotos o BeReals" },
      { table: "CONSUMPTIONS", type: "one-to-many", description: "Bebidas asociadas a la noche" },
      { table: "COMMENTS", type: "one-to-many", description: "Comentarios de amigos" }
    ],
    prismaSchema: `model Post {
  id             String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId         String   @map("user_id") @db.Uuid
  groupId        String?  @map("group_id") @db.Uuid
  note           String?
  rating         Int?
  mood           PostMood?
  locationName   String?  @map("location_name")
  // locationCoords Point? (Normalmente manejado con raw extensions en Prisma o floats)
  visibility     PostVisibility @default(FRIENDS)
  nightDate      DateTime @map("night_date")
  createdAt      DateTime @default(now()) @map("created_at")
  updatedAt      DateTime @updatedAt @map("updated_at")

  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  group          Group?   @relation(fields: [groupId], references: [id], onDelete: SetNull)
  consumptions   Consumption[]
  photos         PostPhoto[]
  tags           PostTag[]
  reactions      Reaction[]
  comments       Comment[]
  mvpVotes       MvpVote[]

  @@map("posts")
}`
  },
  {
    id: "consumptions",
    name: "CONSUMPTIONS",
    domain: "content",
    description: "Registro de bebidas o cosas consumidas asociadas a un post.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "ID de consumo" },
      { name: "post_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Post al que pertenece" },
      { name: "drink_type", type: "enum", constraints: ["NOT NULL"], description: "cubata | beer | wine | shot | cocktail | mixed | custom" },
      { name: "custom_name", type: "string", constraints: [], description: "Nombre libre si es custom" },
      { name: "quantity", type: "int", constraints: ["NOT NULL"], description: "Cantidad de esa bebida" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "Hora del registro" }
    ],
    relations: [
      { table: "POSTS", type: "many-to-one", description: "Pertenece a un post" }
    ],
    designNotes: "drink_type incluye el valor 'custom' para bebidas personalizadas; en ese caso custom_name almacena el nombre libre introducido por el usuario.",
    prismaSchema: `model Consumption {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId      String   @map("post_id") @db.Uuid
  drinkType   DrinkType @map("drink_type")
  customName  String?  @map("custom_name")
  quantity    Int      @default(1)
  createdAt   DateTime @default(now()) @map("created_at")

  post        Post     @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@map("consumptions")
}`
  },
  {
    id: "post_photos",
    name: "POST_PHOTOS",
    domain: "content",
    description: "Imágenes de una noche, con soporte para foto dual (cámara frontal + trasera).",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "post_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "url", type: "string", constraints: ["NOT NULL"], description: "URL de la imagen principal" },
      { name: "thumbnail_url", type: "string", constraints: [], description: "Miniatura para cargas rápidas" },
      { name: "is_dual_capture", type: "bool", constraints: ["NOT NULL"], description: "Si usa formato BeReal" },
      { name: "dual_selfie_url", type: "string", constraints: [], description: "URL de la selfie (cámara frontal)" },
      { name: "order_index", type: "int", constraints: ["NOT NULL"], description: "Orden en el carrusel" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model PostPhoto {
  id              String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId          String   @map("post_id") @db.Uuid
  url             String
  thumbnailUrl    String?  @map("thumbnail_url")
  isDualCapture   Boolean  @default(false) @map("is_dual_capture")
  dualSelfieUrl   String?  @map("dual_selfie_url")
  orderIndex      Int      @default(0) @map("order_index")
  createdAt       DateTime @default(now()) @map("created_at")

  post            Post     @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@map("post_photos")
}`
  },
  {
    id: "post_tags",
    name: "POST_TAGS",
    domain: "content",
    description: "Etiquetas a amigos que estuvieron en la noche.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "post_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "tagged_user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Usuario etiquetado" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model PostTag {
  id            String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId        String   @map("post_id") @db.Uuid
  taggedUserId  String   @map("tagged_user_id") @db.Uuid
  createdAt     DateTime @default(now()) @map("created_at")

  post          Post     @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@unique([postId, taggedUserId])
  @@map("post_tags")
}`
  },
  {
    id: "reactions",
    name: "REACTIONS",
    domain: "content",
    description: "Reacciones (likes) rápidos a un post.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "post_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "type", type: "enum", constraints: ["NOT NULL"], description: "fire | laugh | crown | surf | star" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model Reaction {
  id        String       @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId    String       @map("post_id") @db.Uuid
  userId    String       @map("user_id") @db.Uuid
  type      ReactionType
  createdAt DateTime     @default(now()) @map("created_at")

  post      Post         @relation(fields: [postId], references: [id], onDelete: Cascade)
  user      User         @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([postId, userId])
  @@map("reactions")
}`
  },
  {
    id: "comments",
    name: "COMMENTS",
    domain: "content",
    description: "Comentarios en un post, permitiendo anidamiento para respuestas.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "post_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "parent_id", type: "uuid", constraints: ["FK"], description: "ID de comentario padre para anidar" },
      { name: "content", type: "text", constraints: ["NOT NULL"], description: "Texto del comentario" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" },
      { name: "updated_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    designNotes: "parent_id es autorreferencial para soportar respuestas anidadas sin tabla adicional.",
    prismaSchema: `model Comment {
  id        String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId    String    @map("post_id") @db.Uuid
  userId    String    @map("user_id") @db.Uuid
  parentId  String?   @map("parent_id") @db.Uuid
  content   String    @db.Text
  createdAt DateTime  @default(now()) @map("created_at")
  updatedAt DateTime  @updatedAt @map("updated_at")

  post      Post      @relation(fields: [postId], references: [id], onDelete: Cascade)
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  parent    Comment?  @relation("CommentReplies", fields: [parentId], references: [id])
  replies   Comment[] @relation("CommentReplies")

  @@map("comments")
}`
  },
  {
    id: "mvp_votes",
    name: "MVP_VOTES",
    domain: "gamification",
    description: "Votaciones a amigos como MVP de la noche (el más gracioso, el más liante, etc).",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "post_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Noche asociada" },
      { name: "voter_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Quien vota" },
      { name: "nominee_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "A quien se vota" },
      { name: "category", type: "enum", constraints: ["NOT NULL"], description: "most_active | funniest | best_level | protagonist | photographer | first_last" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model MvpVote {
  id        String      @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId    String      @map("post_id") @db.Uuid
  voterId   String      @map("voter_id") @db.Uuid
  nomineeId String      @map("nominee_id") @db.Uuid
  category  MvpCategory
  createdAt DateTime    @default(now()) @map("created_at")

  post      Post        @relation(fields: [postId], references: [id], onDelete: Cascade)
  voter     User        @relation(fields: [voterId], references: [id], onDelete: Cascade)

  @@unique([postId, voterId, category])
  @@map("mvp_votes")
}`
  },
  {
    id: "mvp_results",
    name: "MVP_RESULTS",
    domain: "gamification",
    description: "Resultados consolidados de las votaciones tras procesar una noche.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "post_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "winner_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "votes_received", type: "int", constraints: ["NOT NULL"], description: "Cantidad de votos ganadores" },
      { name: "is_tie", type: "bool", constraints: ["NOT NULL"], description: "Si hubo empate" },
      { name: "resolved_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model MvpResult {
  id            String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  postId        String   @map("post_id") @db.Uuid
  winnerId      String   @map("winner_id") @db.Uuid
  votesReceived Int      @map("votes_received")
  isTie         Boolean  @default(false) @map("is_tie")
  resolvedAt    DateTime @default(now()) @map("resolved_at")

  @@map("mvp_results")
}`
  },
  {
    id: "achievements",
    name: "ACHIEVEMENTS",
    domain: "gamification",
    description: "Catálogo maestro de logros que se pueden desbloquear en la app.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "code", type: "string", constraints: ["UK", "NOT NULL"], description: "Código para el worker (ej: '5_nights_streak')" },
      { name: "name", type: "string", constraints: ["NOT NULL"], description: "Nombre público" },
      { name: "description", type: "string", constraints: ["NOT NULL"], description: "Cómo desbloquearlo" },
      { name: "icon_url", type: "string", constraints: ["NOT NULL"], description: "Icono/medalla 3D" },
      { name: "category", type: "enum", constraints: ["NOT NULL"], description: "nights | mvp | drinks | social | special" },
      { name: "required_value", type: "int", constraints: ["NOT NULL"], description: "Threshold para activarse" },
      { name: "is_secret", type: "bool", constraints: ["NOT NULL"], description: "Si aparece ofuscado hasta lograrlo" }
    ],
    relations: [],
    prismaSchema: `model Achievement {
  id            String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  code          String   @unique
  name          String
  description   String
  iconUrl       String   @map("icon_url")
  category      AchievementCategory
  requiredValue Int      @default(1) @map("required_value")
  isSecret      Boolean  @default(false) @map("is_secret")

  userUnlocked  UserAchievement[]

  @@map("achievements")
}`
  },
  {
    id: "user_achievements",
    name: "USER_ACHIEVEMENTS",
    domain: "gamification",
    description: "Vincula a un usuario con un logro desbloqueado.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "achievement_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "unlocked_at", type: "timestamp", constraints: ["NOT NULL"], description: "Fecha de obtención" }
    ],
    relations: [],
    prismaSchema: `model UserAchievement {
  id             String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId         String   @map("user_id") @db.Uuid
  achievementId  String   @map("achievement_id") @db.Uuid
  unlockedAt     DateTime @default(now()) @map("unlocked_at")

  user           User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  achievement    Achievement  @relation(fields: [achievementId], references: [id], onDelete: Cascade)

  @@unique([userId, achievementId])
  @@map("user_achievements")
}`
  },
  {
    id: "messages",
    name: "MESSAGES",
    domain: "chat",
    description: "Mensajes en el chat de un grupo.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "group_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "sender_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "reply_to_id", type: "uuid", constraints: ["FK"], description: "ID de mensaje que responde" },
      { name: "content", type: "text", constraints: ["NOT NULL"], description: "" },
      { name: "type", type: "enum", constraints: ["NOT NULL"], description: "text | image | video | audio | gif | poll | pinned" },
      { name: "is_pinned", type: "bool", constraints: ["NOT NULL"], description: "" },
      { name: "is_deleted", type: "bool", constraints: ["NOT NULL"], description: "Borrado suave" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" },
      { name: "updated_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    designNotes: "reply_to_id autorreferencial habilita el hilo de respuestas. is_deleted implementa soft delete para mantener la integridad del hilo.",
    prismaSchema: `model Message {
  id         String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  groupId    String   @map("group_id") @db.Uuid
  senderId   String   @map("sender_id") @db.Uuid
  replyToId  String?  @map("reply_to_id") @db.Uuid
  content    String   @db.Text
  type       MessageType @default(TEXT)
  isPinned   Boolean  @default(false) @map("is_pinned")
  isDeleted  Boolean  @default(false) @map("is_deleted")
  createdAt  DateTime @default(now()) @map("created_at")
  updatedAt  DateTime @updatedAt @map("updated_at")

  group      Group    @relation(fields: [groupId], references: [id], onDelete: Cascade)
  sender     User     @relation(fields: [senderId], references: [id], onDelete: Cascade)
  replyTo    Message? @relation("Thread", fields: [replyToId], references: [id])
  replies    Message[] @relation("Thread")
  reactions  MessageReaction[]
  reads      MessageRead[]

  @@map("messages")
}`
  },
  {
    id: "message_reactions",
    name: "MESSAGE_REACTIONS",
    domain: "chat",
    description: "Reacciones con emojis a mensajes del chat.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "message_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "emoji", type: "string", constraints: ["NOT NULL"], description: "Emoji string (unicode)" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model MessageReaction {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  messageId String   @map("message_id") @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  emoji     String
  createdAt DateTime @default(now()) @map("created_at")

  message   Message  @relation(fields: [messageId], references: [id], onDelete: Cascade)

  @@unique([messageId, userId, emoji])
  @@map("message_reactions")
}`
  },
  {
    id: "message_reads",
    name: "MESSAGE_READS",
    domain: "chat",
    description: "Control de lectura (doble check) de los mensajes.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "message_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "read_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model MessageRead {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  messageId String   @map("message_id") @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  readAt    DateTime @default(now()) @map("read_at")

  message   Message  @relation(fields: [messageId], references: [id], onDelete: Cascade)

  @@unique([messageId, userId])
  @@map("message_reads")
}`
  },
  {
    id: "polls",
    name: "POLLS",
    domain: "chat",
    description: "Encuestas dentro del chat del grupo.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "message_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "El mensaje tipo 'poll'" },
      { name: "question", type: "string", constraints: ["NOT NULL"], description: "Pregunta principal" },
      { name: "expires_at", type: "timestamp", constraints: [], description: "Cuándo se cierra" }
    ],
    relations: [],
    prismaSchema: `model Poll {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  messageId String   @unique @map("message_id") @db.Uuid
  question  String
  expiresAt DateTime? @map("expires_at")

  options   PollOption[]
  votes     PollVote[]

  @@map("polls")
}`
  },
  {
    id: "poll_options",
    name: "POLL_OPTIONS",
    domain: "chat",
    description: "Opciones disponibles para votar en una encuesta.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "poll_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "text", type: "string", constraints: ["NOT NULL"], description: "Texto de la opción (ej: 'Ir a Kapital')" }
    ],
    relations: [],
    prismaSchema: `model PollOption {
  id      String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  pollId  String   @map("poll_id") @db.Uuid
  text    String

  poll    Poll     @relation(fields: [pollId], references: [id], onDelete: Cascade)
  votes   PollVote[]

  @@map("poll_options")
}`
  },
  {
    id: "poll_votes",
    name: "POLL_VOTES",
    domain: "chat",
    description: "Votos emitidos por usuarios en opciones de encuestas.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "poll_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "option_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "voted_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model PollVote {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  pollId    String   @map("poll_id") @db.Uuid
  optionId  String   @map("option_id") @db.Uuid
  userId    String   @map("user_id") @db.Uuid
  votedAt   DateTime @default(now()) @map("voted_at")

  poll      Poll     @relation(fields: [pollId], references: [id], onDelete: Cascade)
  option    PollOption @relation(fields: [optionId], references: [id], onDelete: Cascade)

  @@unique([pollId, userId])
  @@map("poll_votes")
}`
  },
  {
    id: "events",
    name: "EVENTS",
    domain: "chat",
    description: "Planificación de salidas nocturnas dentro de un grupo.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "group_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "created_by", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "name", type: "string", constraints: ["NOT NULL"], description: "Título del plan" },
      { name: "description", type: "string", constraints: [], description: "" },
      { name: "location_name", type: "string", constraints: [], description: "" },
      { name: "location_coords", type: "point", constraints: [], description: "" },
      { name: "starts_at", type: "timestamp", constraints: ["NOT NULL"], description: "" },
      { name: "ends_at", type: "timestamp", constraints: [], description: "" },
      { name: "linked_post_id", type: "uuid", constraints: ["FK"], description: "Post final generado del evento" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model Event {
  id             String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  groupId        String   @map("group_id") @db.Uuid
  createdBy      String   @map("created_by") @db.Uuid
  name           String
  description    String?
  locationName   String?  @map("location_name")
  startsAt       DateTime @map("starts_at")
  endsAt         DateTime? @map("ends_at")
  linkedPostId   String?  @map("linked_post_id") @db.Uuid
  createdAt      DateTime @default(now()) @map("created_at")

  group          Group    @relation(fields: [groupId], references: [id], onDelete: Cascade)
  rsvps          EventRsvp[]

  @@map("events")
}`
  },
  {
    id: "event_rsvps",
    name: "EVENT_RSVPS",
    domain: "chat",
    description: "Confirmación de asistencia a eventos.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "event_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "status", type: "enum", constraints: ["NOT NULL"], description: "going | not_going | maybe" },
      { name: "responded_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model EventRsvp {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  eventId     String   @map("event_id") @db.Uuid
  userId      String   @map("user_id") @db.Uuid
  status      RsvpStatus @default(MAYBE)
  respondedAt DateTime @default(now()) @map("responded_at")

  event       Event    @relation(fields: [eventId], references: [id], onDelete: Cascade)
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([eventId, userId])
  @@map("event_rsvps")
}`
  },
  {
    id: "recaps",
    name: "RECAPS",
    domain: "business",
    description: "Resúmenes estilo Spotify Wrapped con estadísticas mensuales y anuales.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "group_id", type: "uuid", constraints: ["FK"], description: "Puede ser recap de grupo entero" },
      { name: "period", type: "enum", constraints: ["NOT NULL"], description: "monthly | annual" },
      { name: "year", type: "int", constraints: ["NOT NULL"], description: "Año correspondiente" },
      { name: "month", type: "int", constraints: [], description: "Mes correspondiente (1-12)" },
      { name: "stats_data", type: "jsonb", constraints: ["NOT NULL"], description: "Datos consolidados para UI" },
      { name: "share_image_url", type: "string", constraints: [], description: "Imagen generada para compartir en IG" },
      { name: "generated_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    designNotes: "stats_data usa JSONB para flexibilidad: el esquema de estadísticas varía entre recaps mensuales y anuales sin necesitar migraciones de columnas.",
    prismaSchema: `model Recap {
  id             String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId         String   @map("user_id") @db.Uuid
  groupId        String?  @map("group_id") @db.Uuid
  period         RecapPeriod
  year           Int
  month          Int?
  statsData      Json     @map("stats_data") // jsonb en PostgreSQL
  shareImageUrl  String?  @map("share_image_url")
  generatedAt    DateTime @default(now()) @map("generated_at")

  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("recaps")
}`
  },
  {
    id: "group_rankings",
    name: "GROUP_RANKINGS",
    domain: "gamification",
    description: "Rankings desnormalizados (ej. quién ha salido más noches) por periodo.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "group_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "metric", type: "enum", constraints: ["NOT NULL"], description: "consumptions | nights_out | mvps | streak | total_score" },
      { name: "period", type: "enum", constraints: ["NOT NULL"], description: "week | month | year | all_time" },
      { name: "value", type: "int", constraints: ["NOT NULL"], description: "Valor de la métrica (puntos, cantidad)" },
      { name: "rank_position", type: "int", constraints: ["NOT NULL"], description: "Posición en el leaderboard" },
      { name: "period_start", type: "timestamp", constraints: ["NOT NULL"], description: "" },
      { name: "period_end", type: "timestamp", constraints: ["NOT NULL"], description: "" },
      { name: "updated_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    designNotes: "Tabla desnormalizada intencionalmente. Se recalcula periódicamente con jobs Bull sobre Redis para que las consultas de ranking sean O(1) sin joins complejos.",
    prismaSchema: `model GroupRanking {
  id             String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  groupId        String   @map("group_id") @db.Uuid
  userId         String   @map("user_id") @db.Uuid
  metric         RankingMetric
  period         RankingPeriod
  value          Int      @default(0)
  rankPosition   Int      @map("rank_position")
  periodStart    DateTime @map("period_start")
  periodEnd      DateTime @map("period_end")
  updatedAt      DateTime @updatedAt @map("updated_at")

  group          Group    @relation(fields: [groupId], references: [id], onDelete: Cascade)

  @@index([groupId, metric, period])
  @@map("group_rankings")
}`
  },
  {
    id: "notifications",
    name: "NOTIFICATIONS",
    domain: "business",
    description: "Historial de notificaciones push y alertas en la app.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "type", type: "enum", constraints: ["NOT NULL"], description: "new_post | mvp_vote | mvp_result | new_achievement | new_message | event_reminder | new_follower | tag | reaction | monthly_recap" },
      { name: "payload", type: "jsonb", constraints: ["NOT NULL"], description: "Datos contextuales" },
      { name: "is_read", type: "bool", constraints: ["NOT NULL"], description: "Estado de lectura" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    designNotes: "payload en JSONB permite que cada tipo de notificación lleve su propio contexto (post_id, group_id, winner_name) sin columnas dispersas.",
    prismaSchema: `model Notification {
  id        String           @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId    String           @map("user_id") @db.Uuid
  type      NotificationType
  payload   Json             // jsonb para data estructurada
  isRead    Boolean          @default(false) @map("is_read")
  createdAt DateTime         @default(now()) @map("created_at")

  user      User             @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("notifications")
}`
  },
  {
    id: "subscriptions",
    name: "SUBSCRIPTIONS",
    domain: "identity",
    description: "Suscripciones de pago gestionadas por Stripe.",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "user_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "" },
      { name: "plan", type: "enum", constraints: ["NOT NULL"], description: "free | premium | group_pro" },
      { name: "status", type: "enum", constraints: ["NOT NULL"], description: "active | cancelled | expired | trial" },
      { name: "stripe_customer_id", type: "string", constraints: [], description: "ID de cliente en Stripe" },
      { name: "stripe_subscription_id", type: "string", constraints: [], description: "ID de la suscripción" },
      { name: "current_period_start", type: "timestamp", constraints: [], description: "" },
      { name: "current_period_end", type: "timestamp", constraints: [], description: "" },
      { name: "cancelled_at", type: "timestamp", constraints: [], description: "" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model Subscription {
  id                   String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  userId               String   @unique @map("user_id") @db.Uuid
  plan                 PlanType @default(FREE)
  status               SubStatus @default(ACTIVE)
  stripeCustomerId     String?  @map("stripe_customer_id")
  stripeSubscriptionId String?  @map("stripe_subscription_id")
  currentPeriodStart   DateTime? @map("current_period_start")
  currentPeriodEnd     DateTime? @map("current_period_end")
  cancelledAt          DateTime? @map("cancelled_at")
  createdAt            DateTime @default(now()) @map("created_at")

  user                 User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("subscriptions")
}`
  },
  {
    id: "reports",
    name: "REPORTS",
    domain: "business",
    description: "Reportes de moderación (spam, acoso, etc).",
    fields: [
      { name: "id", type: "uuid", constraints: ["PK", "NOT NULL"], description: "" },
      { name: "reporter_id", type: "uuid", constraints: ["FK", "NOT NULL"], description: "Quien reporta" },
      { name: "reported_user_id", type: "uuid", constraints: ["FK"], description: "Usuario reportado" },
      { name: "reported_post_id", type: "uuid", constraints: ["FK"], description: "Post reportado" },
      { name: "reason", type: "enum", constraints: ["NOT NULL"], description: "spam | harassment | inappropriate | underage | other" },
      { name: "description", type: "text", constraints: [], description: "Detalles extra" },
      { name: "status", type: "enum", constraints: ["NOT NULL"], description: "pending | reviewed | resolved" },
      { name: "created_at", type: "timestamp", constraints: ["NOT NULL"], description: "" }
    ],
    relations: [],
    prismaSchema: `model Report {
  id              String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  reporterId      String   @map("reporter_id") @db.Uuid
  reportedUserId  String?  @map("reported_user_id") @db.Uuid
  reportedPostId  String?  @map("reported_post_id") @db.Uuid
  reason          ReportReason
  description     String?  @db.Text
  status          ReportStatus @default(PENDING)
  createdAt       DateTime @default(now()) @map("created_at")

  @@map("reports")
}`
  }
];
