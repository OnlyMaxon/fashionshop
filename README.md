## Fashion Shop — Animated Fashion Shop

Short description
-----------------
This is a small demo e-commerce web application showcasing a fashion shop UI. It’s built with React + TypeScript, Vite and Tailwind CSS. The app displays a catalog of products, supports category filtering, product detail modal, and a simple shopping cart with quantity controls.

Tech stack
----------
- Vite
- React 18 + TypeScript
- Tailwind CSS
- Supabase (client configured in `src/lib/supabase.ts`; a migration for `products` table is included)
- Lucide icons

Main features
-------------
- Animated product catalog
- Category filtering
- Product detail modal with quantity selector
- Shopping cart: add/remove items, update quantity, view total
- Example/local data in `src/data/products.ts`

Project structure (key files)
-----------------------------
- `src/App.tsx` — main application component (catalog, cart state, filtering)
- `src/main.tsx` — entry point
- `src/components/` — UI components (Header, Hero, ProductCard, ProductModal, Cart)
- `src/data/products.ts` — sample product dataset used by the UI
- `src/lib/supabase.ts` — Supabase client initialization (reads VITE_* env vars)
- `supabase/migrations/20251101181744_create_fashion_products.sql` — DB migration for `products` table
- `package.json` — scripts and dependencies

Scripts (from `package.json`)
--------------------------------
- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript type check

Local setup and run
-------------------
1. Ensure Node.js is installed (recommended 18+).
2. Install dependencies:

```powershell
npm install
```

3. (Optional) If you want to use Supabase as the products backend, create a `.env` (or set env vars) with:

```text
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Environment variables must be prefixed with `VITE_` to be available in the client bundle. If these variables are not present, the app uses the local dataset in `src/data/products.ts`.

4. Start the dev server:

```powershell
npm run dev
```

5. Open the app in the browser at http://localhost:5173

Using Supabase
--------------
- There is a migration at `supabase/migrations/20251101181744_create_fashion_products.sql` that creates a `products` table with the following columns: `id (uuid)`, `name`, `description`, `price (decimal)`, `category`, `image_url`, `stock (integer)`, `featured (boolean)`, `created_at`.
- The migration enables row-level security and adds a policy allowing public SELECT to the `anon` role.
- The Supabase client is initialized in `src/lib/supabase.ts`. The current UI loads data from `src/data/products.ts` by default. To switch to Supabase, fetch products with `supabase.from('products').select('*')` and replace the local data source.

Contract (short)
----------------
- Input: public, unauthenticated catalog access (no server-side auth required for browsing)
- Output/behavior: renders product list, handles cart in React state
- Error modes: empty result set shows a "No products found" message; cart operations clamp quantities by product `stock`

Edge cases
----------
- Empty catalog — app shows empty state
- Adding more items than available — quantity is limited to `stock`
- Missing Supabase env vars — app falls back to local sample data

Contributing
------------
1. Fork the repository and create a feature branch
2. Make changes, ensure types and linting pass
3. Open a pull request

License
-------
No LICENSE file is included. Add a license if you plan to publish or share this project publicly.

Notes and next steps
--------------------
- Integrate Supabase as the primary data source and add CRUD operations for admin use
- Persist cart to localStorage
- Add a checkout flow and order submission
- Add tests (Jest + React Testing Library) and CI checks for types & linting

Quick extras I can add on request
--------------------------------
- `.env.example` with the two VITE_* variables
- A small seeder script to import `src/data/products.ts` into Supabase
- Persisting cart to localStorage and syncing with Supabase

If you want any of the extras, tell me which and I’ll add them.
## Fashion Shop — Animated Fashion Shop

Короткое описание
------------------
Это небольшое демонстрационное веб-приложение магазина одежды, реализованное на React + TypeScript с Vite и TailwindCSS. Приложение отображает набор товаров, поддерживает фильтрацию по категориям, просмотр деталей товара в модальном окне и простую корзину с управлением количеством.

Технологии
----------
- Vite
- React 18 + TypeScript
- Tailwind CSS
- Supabase (клиент настроен в `src/lib/supabase.ts`, имеется миграция для таблицы `products`)
- Lucide icons

Ключевые возможности
--------------------
- Отображение каталога товаров с анимациями
- Фильтрация по категориям
- Модальное окно с подробностями товара и выбором количества
- Корзина: добавить/удалить товар, изменить количество, просмотреть сумму
- Пример данных: `src/data/products.ts` (используется как локальный источник данных)

Структура проекта (важные файлы)
--------------------------------
- `src/App.tsx` — корневой компонент приложения (логика фильтрации, корзины, состояние)
- `src/main.tsx` — точка входа
- `src/components/` — UI-компоненты (Header, Hero, ProductCard, ProductModal, Cart)
- `src/data/products.ts` — пример набора товаров (локальные данные)
- `src/lib/supabase.ts` — инициализация Supabase-клиента (использует VITE_* переменные окружения)
- `supabase/migrations/20251101181744_create_fashion_products.sql` — миграция и схема таблицы `products`
- `package.json` — скрипты и зависимости

Скрипты (из `package.json`)
---------------------------
- `npm run dev` — запуск dev-сервера Vite
- `npm run build` — сборка для продакшена
- `npm run preview` — локальный просмотр сборки
- `npm run lint` — запуск ESLint
- `npm run typecheck` — проверка типов (tsc)

Установка и запуск локально
--------------------------
1. Убедитесь, что у вас установлен Node.js (рекомендуется 18+).
2. Установите зависимости:

```powershell
npm install
```

3. (Опционально) Если планируете использовать Supabase, добавьте файл `.env` или установите переменные окружения в вашей системе:

```text
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Переменные окружения должны быть доступны Vite во время запуска (prefix VITE_). Если переменные не заданы, приложение по умолчанию использует локальный набор данных из `src/data/products.ts`.

4. Запуск в режиме разработки:

```powershell
npm run dev
```

5. Откройте в браузере: http://localhost:5173

Работа с базой Supabase
------------------------
- В проекте есть подготовленная миграция: `supabase/migrations/20251101181744_create_fashion_products.sql` — создаёт таблицу `products` с полями: `id (uuid)`, `name`, `description`, `price (decimal)`, `category`, `image_url`, `stock (integer)`, `featured (boolean)`, `created_at`.
- Миграция включает включение RLS и политику, позволяющую публичный SELECT (anon).
- Клиент Supabase настроен в `src/lib/supabase.ts`. В текущей версии UI использует локальные данные (`src/data/products.ts`). Для переключения на Supabase необходимо заменить источник данных на запросы через `supabase` (например, `supabase.from('products').select('*')`).

Контракт (коротко)
------------------
- Вход: никакой серверной авторизации — публичный каталог товаров (анонимный доступ)
- Выход/поведение: отображение списка товаров, управление локальной корзиной в состоянии React
- Ошибки: отсутствие данных — показывается сообщение "No products found"; операции корзины проверяют наличие товара и пределы по stock

Возможные крайние случаи
-----------------------
- Пустой список товаров — корректно отображается пустое состояние
- Попытка добавить больше единиц товара, чем доступно на складе — количество ограничивается полем `stock`
- Отсутствие переменных окружения Supabase — приложение работает с локальными данными

Как внести вклад
-----------------
1. Форкните репозиторий и создайте ветку feature/bugfix
2. Добавьте изменения и убедитесь, что не нарушили типизацию и ESLint
3. Откройте pull request

Лицензия
--------
Проект не содержит явного LICENSE-файла. Добавьте лицензию при необходимости.

Примечания и дальнейшие шаги
---------------------------
- Можно интегрировать Supabase как источник товаров и добавить CRUD-операции для админки.
- Добавить persist корзины (localStorage) и форму заказа/чекаут.
- Добавить тесты (Jest/Testing Library) и CI проверку типов/линтинга.

Контакты
--------
Если нужны изменения README или помощь с интеграцией Supabase — напишите детали задачи.

---
Файл с миграцией находится здесь: `supabase/migrations/20251101181744_create_fashion_products.sql`.
