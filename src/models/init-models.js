var DataTypes = require("sequelize").DataTypes;
var _AppUsers = require("./AppUsers");
var _Languages = require("./Languages");
var _announcements = require("./announcements");
var _article = require("./article");
var _autharizations = require("./autharizations");
var _authors = require("./authors");
var _ayarlar = require("./ayarlar");
var _categories = require("./categories");
var _combos = require("./combos");
var _comment = require("./comment");
var _courses = require("./courses");
var _currency = require("./currency");
var _customer_limits = require("./customer_limits");
var _customer_questions = require("./customer_questions");
var _customers = require("./customers");
var _customers_info = require("./customers_info");
var _customers_info_answer = require("./customers_info_answer");
var _customers_remarks = require("./customers_remarks");
var _department = require("./department");
var _ecatalog_upload = require("./ecatalog_upload");
var _ecatalogs = require("./ecatalogs");
var _epages = require("./epages");
var _face = require("./face");
var _follows = require("./follows");
var _forwardings = require("./forwardings");
var _forwardroutes = require("./forwardroutes");
var _game_level = require("./game_level");
var _game_level_1 = require("./game_level_1");
var _invoices = require("./invoices");
var _invoices_items = require("./invoices_items");
var _logs = require("./logs");
var _luka_fatura = require("./luka_fatura");
var _luka_urun = require("./luka_urun");
var _materials = require("./materials");
var _measures = require("./measures");
var _menus = require("./menus");
var _payments = require("./payments");
var _preorders = require("./preorders");
var _preorders_items = require("./preorders_items");
var _products = require("./products");
var _products_pieces = require("./products_pieces");
var _products_price = require("./products_price");
var _questions = require("./questions");
var _room = require("./room");
var _stocks = require("./stocks");
var _tag = require("./tag");
var _tasks = require("./tasks");
var _tasks_managements = require("./tasks_managements");
var _todolists = require("./todolists");
var _translate = require("./translate");
var _translate_e = require("./translate_e");
var _transportations = require("./transportations");
var _transportations_items = require("./transportations_items");
var _transports = require("./transports");
var _tutorials = require("./tutorials");
var _user = require("./user");
var _user_favorites_article = require("./user_favorites_article");
var _users = require("./users");
var _users_token = require("./users_token");
var _vector = require("./vector");
var _weeklylists = require("./weeklylists");

function initModels(sequelize) {
  var AppUsers = _AppUsers(sequelize, DataTypes);
  var Languages = _Languages(sequelize, DataTypes);
  var announcements = _announcements(sequelize, DataTypes);
  var article = _article(sequelize, DataTypes);
  var autharizations = _autharizations(sequelize, DataTypes);
  var authors = _authors(sequelize, DataTypes);
  var ayarlar = _ayarlar(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var combos = _combos(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var courses = _courses(sequelize, DataTypes);
  var currency = _currency(sequelize, DataTypes);
  var customer_limits = _customer_limits(sequelize, DataTypes);
  var customer_questions = _customer_questions(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var customers_info = _customers_info(sequelize, DataTypes);
  var customers_info_answer = _customers_info_answer(sequelize, DataTypes);
  var customers_remarks = _customers_remarks(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var ecatalog_upload = _ecatalog_upload(sequelize, DataTypes);
  var ecatalogs = _ecatalogs(sequelize, DataTypes);
  var epages = _epages(sequelize, DataTypes);
  var face = _face(sequelize, DataTypes);
  var follows = _follows(sequelize, DataTypes);
  var forwardings = _forwardings(sequelize, DataTypes);
  var forwardroutes = _forwardroutes(sequelize, DataTypes);
  var game_level = _game_level(sequelize, DataTypes);
  var game_level_1 = _game_level_1(sequelize, DataTypes);
  var invoices = _invoices(sequelize, DataTypes);
  var invoices_items = _invoices_items(sequelize, DataTypes);
  var logs = _logs(sequelize, DataTypes);
  var luka_fatura = _luka_fatura(sequelize, DataTypes);
  var luka_urun = _luka_urun(sequelize, DataTypes);
  var materials = _materials(sequelize, DataTypes);
  var measures = _measures(sequelize, DataTypes);
  var menus = _menus(sequelize, DataTypes);
  var payments = _payments(sequelize, DataTypes);
  var preorders = _preorders(sequelize, DataTypes);
  var preorders_items = _preorders_items(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products_pieces = _products_pieces(sequelize, DataTypes);
  var products_price = _products_price(sequelize, DataTypes);
  var questions = _questions(sequelize, DataTypes);
  var room = _room(sequelize, DataTypes);
  var stocks = _stocks(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var tasks_managements = _tasks_managements(sequelize, DataTypes);
  var todolists = _todolists(sequelize, DataTypes);
  var translate = _translate(sequelize, DataTypes);
  var translate_e = _translate_e(sequelize, DataTypes);
  var transportations = _transportations(sequelize, DataTypes);
  var transportations_items = _transportations_items(sequelize, DataTypes);
  var transports = _transports(sequelize, DataTypes);
  var tutorials = _tutorials(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_favorites_article = _user_favorites_article(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_token = _users_token(sequelize, DataTypes);
  var vector = _vector(sequelize, DataTypes);
  var weeklylists = _weeklylists(sequelize, DataTypes);

  AppUsers.belongsTo(Languages, { as: "language", foreignKey: "languageId"});
  Languages.hasMany(AppUsers, { as: "AppUsers", foreignKey: "languageId"});

  return {
    AppUsers,
    Languages,
    announcements,
    article,
    autharizations,
    authors,
    ayarlar,
    categories,
    combos,
    comment,
    courses,
    currency,
    customer_limits,
    customer_questions,
    customers,
    customers_info,
    customers_info_answer,
    customers_remarks,
    department,
    ecatalog_upload,
    ecatalogs,
    epages,
    face,
    follows,
    forwardings,
    forwardroutes,
    game_level,
    game_level_1,
    invoices,
    invoices_items,
    logs,
    luka_fatura,
    luka_urun,
    materials,
    measures,
    menus,
    payments,
    preorders,
    preorders_items,
    products,
    products_pieces,
    products_price,
    questions,
    room,
    stocks,
    tag,
    tasks,
    tasks_managements,
    todolists,
    translate,
    translate_e,
    transportations,
    transportations_items,
    transports,
    tutorials,
    user,
    user_favorites_article,
    users,
    users_token,
    vector,
    weeklylists,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
