/**
 * Created by jianghai on 2018/10/20.
 */

const questions = [
  {
    id: '1',
    title: '关于“范围”，以下说法哪个是错误的',
    options: {
      A: '产品范围是某项产品、服务或成果所具有的特征和功能',
      B: '项目范围是为交付具有规定特性与功能的产品、服务或成果而必须完成的工作',
      C: '项目范围有时也包括产品范围',
      D: '产品范围有时也包括项目范围',
    },
  },
  {
    id: '2',
    title: '在适应/敏捷型生命周期中，项目的范围管理过程是',
    options: {
      A: '在项目开始时就对项目可交付成果进行定义，对任何范围变化都要进行渐进管理',
      B: '通过多次迭代来开发可交付成果，并在每次迭代开始时定义和批准详细的范围',
      C: '采用适应/敏捷型项目生命周期，需要相关方在开始和结束时充分参与',
      D: '适应/敏捷型项目生命周期强调了变更，所以适应/敏捷型项目没有范围管理',
    },
  },
  {
    id: '3',
    title: '敏捷项目在每次迭代(冲刺)的过程中，都会重复开展',
    options: {
      A: '收集需求、定义范围、创建WBS',
      B: '规划范围管理、定义范围、确认范围',
      C: '收集需求、定义范围、确认范围',
      D: '规划范围管理、定义范围、创建WBS',
    },
  },
  {
    id: '4',
    title: '随着项目管理的发展，组织在项目范围管理的范围趋势和新兴实践方面更加注重与商业分析专业人员的合作，以便实现以下目的，除了',
    options: {
      A: '确定组织的问题，并识别商业需要',
      B: '识别并推荐能够满足这些需要的可行解决方案',
      C: '收集、记录并管理相关方需求，以满足商业和项目目的',
      D: '判断采用哪种结构的WBS来管理具体项目',
    },
  },
  {
    id: '5',
    title: '在敏捷项目管理中，需求常常被放入哪里进行管理',
    options: {
      A: '产品路线图',
      B: '未完项',
      C: '迭代',
      D: '回顾',
    },
  },
  {
    id: '6',
    title: '在规划范围管理过程中，你可以使用以下技术来推动本过程的实现，除了',
    options: {
      A: '考虑具备相关专业知识的个人或小组的意见',
      B: '通过备选方案分析',
      C: '通过会议',
      D: '借助项目管理信息系统',
    },
  },
  {
    id: '7',
    title: '关于需求管理计划，说法正确的是',
    options: {
      A: '描述将如何定义、制定、监督、控制和确认项目范围',
      B: '有些组织将其称之为“商业分析计划”',
      C: '描述了根据详细项目范围说明书创建WBS',
      D: '需求管理计划是范围管理计划的组成部分',
    },
  },
  {
    id: '8',
    title: '需求是',
    options: {
      A: '根据项目章程中描述而需要满足的高层期望',
      B: '根据特定协议或其他强制性规范，产品、服务或成果必须具备的条件和能力',
      C: '发起人、管理层、客户的愿望',
      D: '是项目经理在项目管理过程中期望得到的某种追求',
    },
  },
  {
    id: '9',
    title: '在收集项目需求的过程中，需要以下项目文件的支持，哪个不是项目文件的表示形式',
    options: {
      A: '假设日志',
      B: '相关方参与计划',
      C: '经验教训登记册',
      D: '相关方登记册',
    },
  },
  {
    id: '10',
    title: '为了更好的收集到项目中的需求，你可能需要和各个不同的相关方接触，以便更全面的获得需求的信息，收集需求需要参考以下文件，哪个是错误的',
    options: {
      A: '项目章程',
      B: '商业文件',
      C: '需求文件',
      D: '协议',
    },
  },
  {
    id: '11',
    title: '在收集需求的过程中，一位相关方不愿意在会议期间描述太多她的想法，为了获得此人的想法，你可以通过哪种需求收集技术来实现',
    options: {
      A: '访谈',
      B: '焦点小组',
      C: '问卷调查',
      D: '标杆对照',
    },
  },
  {
    id: '12',
    title: '一位受过训练的主持人正在引导大家进行互动式讨论，这是一个',
    options: {
      A: '访谈',
      B: '焦点小组',
      C: '问卷调查',
      D: '标杆对照',
    },
  },
  {
    id: '13',
    title: '敏捷开发团队共计8人，他们以自组织的方式正在开展工作。在进行到第三个迭代的时候，团队就某个需求是否应该纳入本次冲刺产生了争议，大家决定通过决策的方式来获得结果，哪种决策方式不可行',
    options: {
      A: '一致同意',
      B: '大多数同意',
      C: '相对多数同意',
      D: '多标准决策分析',
    },
  },
  {
    id: '14',
    title: '项目经理和团队正在对多个创意进行评估和排序，以便能够系统性的从风险、不确定性、收益等几个角度来判断哪个创意更有价值，团队正在使用',
    options: {
      A: '独裁型决策制定',
      B: '多标准决策分析',
      C: '名义小组技术',
      D: '质量功能展开',
    },
  },
  {
    id: '15',
    title: '在收集需求过程中，项目团队正在采用“名义小组技术”获取需求，主持人已经在活动挂图上记录了所有人的想法，接下来',
    options: {
      A: '向团队提出一个问题或难题，每个人在深思后写出自己的想法',
      B: '集体讨论各个想法，直到全体成员达成一个明确的共识',
      C: '个人私下投票，决出各种想法的优先排序',
      D: '就挂图上的记录快速做出决定',
    },
  },
  {
    id: '16',
    title: '当产品使用者难以或不愿清晰说明他们的需求时，应该采用哪种技术收集需求',
    options: {
      A: '引导',
      B: '观察和交谈',
      C: '亲和图',
      D: '思维导图',
    },
  },
  {
    id: '17',
    title: '在项目环境中，“范围”可以指',
    options: {
      A: '产品范围和工作范围',
      B: '产品范围和项目范围',
      C: '项目范围和管理范围',
      D: '项目范围和需求范围',
    },
  },
  {
    id: '18',
    title: '某公司的项目管理信息系统升级改造，需要把旧系统中的所有数据迁移到新系统，这是一个什么需求类型的事例',
    options: {
      A: '商业需求',
      B: '相关方需求',
      C: '过渡需求',
      D: '项目需求',
    },
  },
  {
    id: '19',
    title: '一位相关方正在通过以下方式描述需求:她将从某个功能中收益，她需要实现什么，她期望获得什么利益。这是一个',
    options: {
      A: '联合应用设计',
      B: '质量功能展开',
      C: '用户故事',
      D: 'Moscow',
    },
  },
  {
    id: '20',
    title: '项目组正在探讨所开发的系统在企业里如何有效发挥业务价值，团队以所开发系统为出发点，评估与此系统有关的其他人、系统与所开发系统之间如何互动，从而获得更加详细的需求，团队正在应用',
    options: {
      A: '项目管理信息系统',
      B: '系统交互图',
      C: '组织系统',
      D: '项目管理系统',
    },
  },
  {
    id: '21',
    title: '关于原型法，以下说法都是正确的，除了',
    options: {
      A: '原型法支持渐进明细的理念',
      B: '用户故事是原型的一种技术',
      C: '原型包括微缩产品、计算机生成的二维和三位模型、实体模型或模拟',
      D: '故事板是一种原型技术',
    },
  },
  {
    id: '22',
    title: '组织为了满足业务需求和相关方需求，应该通过什么需求来实现',
    options: {
      A: '解决方案需求',
      B: '过渡和就绪需求',
      C: '项目需求',
      D: '质量需求',
    },
  },
  {
    id: '23',
    title: '使用需求跟踪矩阵，以便',
    options: {
      A: '跟踪每个需求，直到他们都被实现',
      B: '确认每个相关方的需求都被记录在矩阵中',
      C: '把每个需求与业务目标或项目目标关联起来',
      D: '把只有有价值的需求记录在需求跟踪矩阵中',
    },
  },
  {
    id: '24',
    title: '哪个过程对需求文件进行过滤，以便筛选出最终的项目需求',
    options: {
      A: '定义范围',
      B: '确认范围',
      C: '核实范围',
      D: '批准范围',
    },
  },
  {
    id: '25',
    title: '借助产品分析可以获得有关项目范围的具体定义，产品分析技术包括以下所有，除了',
    options: {
      A: '组织系统',
      B: '系统分析',
      C: '价值分析',
      D: '价值工程',
    },
  },
  {
    id: '26',
    title: '项目经理和团队成员已经完成了项目范围说明书的内容，一位相关方认为，项目范围说明书包括的内容不应该有',
    options: {
      A: '可交付成果',
      B: '范围基准',
      C: '验收标准',
      D: '项目除外责任',
    },
  },
  {
    id: '27',
    title: '项目经理和团队正在对一个“财务开发系统”创建WBS，团队完成自上而下逐层细化分解后，接下来需要',
    options: {
      A: '识别和分析可交付成果及相关工作',
      B: '确定WBS的结构和编排方法',
      C: '为WBS组成部分制定和分配标识编码',
      D: '核实可交付成果分解的程度是否恰当',
    },
  },
  {
    id: '28',
    title: '在采用敏捷/适应型项目管理时，创建WBS的过程是将史诗故事依次分解为',
    options: {
      A: '超级故事',
      B: '未完项',
      C: '用户故事',
      D: '任务',
    },
  },
  {
    id: '29',
    title: '关于工作包和规划包的说法，正确的是',
    options: {
      A: '工作包属于WBS中的组件，而规划包不属于',
      B: '控制账户可以有多个工作包或规划包',
      C: 'WBS词典不对工作包或规划包做具体解释',
      D: '工作包进一步明确后就成了规划包',
    },
  },
  {
    id: '30',
    title: '哪个过程定义了正式验收已完成的项目可交付成果的过程',
    options: {
      A: '结束项目或阶段',
      B: '最终产品、服务或成果移交',
      C: '确认范围',
      D: '控制质量',
    },
  },
  {
    id: '31',
    title: '为了更好的正式验收已完成的项目可交付成果，你需要获得哪些条件的支持',
    options: {
      A: '需要查看工作绩效信息',
      B: '需要核实的可交付成果',
      C: '需要验收的可交付成果',
      D: '需要变更请求',
    },
  },
  {
    id: '32',
    title: '确认范围和控制质量之间的关系，正确的是',
    options: {
      A: '控制质量过程输出的核实的可交付成果，由项目经理和团队确认通过即可',
      B: '只有在控制质量过程完成后，才能进行确认范围过程，以此保证过程完全独立且符合标准',
      C: '控制质量和确认范围可以同时开始，但本质上控制质量还是在前面进行',
      D: '确认范围和控制质量没有必然关系，两者属于不同的知识领域',
    },
  },
  {
    id: '33',
    title: '在确认范围过程中，项目团队采用了以下技术来通过输入获得输出，哪个是正确的技术',
    options: {
      A: '检查',
      B: '引导',
      C: '表现',
      D: '验收',
    },
  },
  {
    id: '34',
    title: '符合验收标准的可交付成果应该满足以下所有条件，除了',
    options: {
      A: '应该由客户或发起人正式签字批准',
      B: '应该能够证明相关方对可交付成果的验收',
      C: '验收可交付成果的文件将提交至结束项目或阶段过程',
      D: '验收可交付成果的文件将提交至核实可交付成果过程',
    },
  },
  {
    id: '35',
    title: '未经控制的产品或项目范围的扩大(未对时间、成本和资源做相应调整)，这是一种',
    options: {
      A: '变更请求',
      B: '范围蔓延',
      C: '预防措施',
      D: '纠正措施',
    },
  },
  {
    id: '36',
    title: '在控制范围的过程中，需要项目管理计划的支持，哪些组件将是本过程的主要参考',
    options: {
      A: '变更管理计划',
      B: '需求文件',
      C: '配置管理计划',
      D: '绩效测量基准',
    },
  },
  {
    id: '37',
    title: '在控制范围过程中，项目管理团队采用偏差分析和趋势分析技术来判断范围基准和实际范围之间的差异，一旦发现偏差就会提出变更请求，偏差分析和趋势分析属于',
    options: {
      A: '数据收集',
      B: '数据分析',
      C: '数据表现',
      D: '数据管理',
    },
  },
  {
    id: '38',
    title: '关于工作分解结构(WBS)的说明，哪个是错误的',
    options: {
      A: 'WBS遵循100%的原则',
      B: 'WBS中的每个模块应该都是独特的',
      C: 'WBS分解只能自上而下',
      D: 'WBS遵循滚动式规划原则',
    },
  },
  {
    id: '39',
    title: '项目假设包括',
    options: {
      A: '我们假设将会发生的事件，而不是可能发生的风险',
      B: '在范围说明书中没有确认的项目约束',
      C: '我们考虑的事情，即作为为什么需要项目的基础',
      D: '我们认为是真的，但也许不是真的事情',
    },
  },
  {
    id: '40',
    title: '一份描述如何管理和控制项目范围的文件被称为',
    options: {
      A: '项目章程',
      B: '需求管理计划',
      C: '范围管理计划',
      D: '项目范围说明书',
    },
  },
];

const answers = [
  {
    id: '1',
    correct: 'D',
    explanation: '参考PMBOK131.项目范围和产品范围的解释中，项目范围有时也包括了产品范围。有别于产品生命周期与项目生命周期，产品生命周期包括了项目生命周期。',
  },
  {
    id: '2',
    correct: 'B',
    explanation: '参考PMBOK131.A是预测型的解释，C中需要相关方在敏捷项目中全程参与，尤其是客户和用户、产品负责人等。D中，任何类型的项目都有范围。',
  },
  {
    id: '3',
    correct: 'A',
    explanation: '参考PMBOK131.虽然也可能重复B，但并不是常见情况，在PMBOK131中，明确了敏捷/适应型项目每次迭代(冲刺)时都会重复三个过程:收集需求、定义范围、创建WBS。',
  },
  {
    id: '4',
    correct: 'D',
    explanation: '参考PMBOK132，ABC都是项目经理需要和商业分析人员合作，来判断项目能够为组织商业带来什么需要的目的。而D选项则是范围管理计划中应该定义的内容，针对项目具体该如何分解和管理的要求。',
  },
  {
    id: '5',
    correct: 'B',
    explanation: '参考PMBOK132，敏捷方法中，把需求列入未完项。',
  },
  {
    id: '6',
    correct: 'D',
    explanation: '参考PMBOK136，考核了本过程的工具与技术。A是专家判断的形式，B是数据分析的形式。D不是本过程的工具与技术。',
  },
  {
    id: '7',
    correct: 'B',
    explanation: '参考PMBOK137，A是范围管理计划的定义，C属于范围管理计划的内容，D中需求管理计划属于项目管理计划的内容，和范围管理计划是平等关系，都是规划范围管理过程的输出。',
  },
  {
    id: '8',
    correct: 'B',
    explanation: '参考PMBOK140。其他选项都看似正确，但是不全面，在PMP考试中，如果碰到多个看起来(有时候会是两个最相似)相似的答案，请选择描述最完整、最全面、最先的那个。',
  },
  {
    id: '9',
    correct: 'B',
    explanation: '参考PMBOK141，作为收集需求的输入，项目文件可能涉及A、C、D，B选项是项目管理计划的一种。',
  },
  {
    id: '10',
    correct: 'C',
    explanation: '参考PMBOK141，C选项是本过程的输出，不是输入。PMP学习过程应该特别注意每个过程的输入、工具与技术、输出，在实际考试过程中，题型可能会融入很多场景，增加了理解的难度。',
  },
  {
    id: '11',
    correct: 'A',
    explanation: '参考PMBOK142.访谈可以获得机密信息，当一个人在公共场合，或其他场合无法表露个人机密信息时，访谈是最好的方式，因为访谈是一种“一对一”的谈话，也可以多对多。',
  },
  {
    id: '12',
    correct: 'B',
    explanation: '参考PMBOK142.数据收集技术的一种，在收集需求时使用，注意它本身的定义和描述，在学习过程中要灵活理解每个方法的应用。',
  },
  {
    id: '13',
    correct: 'B',
    explanation: '参考PMBOK144，A/B/C都是投票的形式，在投票中，B选项大多数同意，应该选择奇数人员来投票，目前是偶数，可能出现4对4的局面，大多数同意适用于奇数人员。',
  },
  {
    id: '14',
    correct: 'B',
    explanation: '参考PMBOK144，多标准决策分析是决策的一种方式，通过多个因素，来判断一个需求或创意所占的因素比重最大，从而做出排序，选择一因素占比最大最重的那个。',
  },
  {
    id: '15',
    correct: 'B',
    explanation: '参考PMBOK144，名义小组技术包括四个步骤:(1)向团队提出一个问题或难题，每个人在深思后写出自己的想法;(2)主持人已经在活动挂图上记录了所有人的想法;(3)集体讨论各个想法，直到全体成员达成一个明确的共识;(4)个人私下投票，决出各种想法的优先排序。',
  },
  {
    id: '16',
    correct: 'B',
    explanation: '参考PMBOK145，观察和交谈，是人际关系与团队技能的一种表现形式。亲和图和思维导图是数据表现的形式。每种技术的解析，以及使用场景，都需要数量掌握。',
  },
  {
    id: '17',
    correct: 'B',
    explanation: '参考PMBOK131.',
  },
  {
    id: '18',
    correct: 'C',
    explanation: '参考PMBOK148',
  },
  {
    id: '19',
    correct: 'C',
    explanation: '参考PMBOK145，A、B、C三个都是引导的一种方式。凡是在PMBOK中出现的情境事例，或举例说明，都需要认真理解，考试中可能会直接考PMBOK中的事例。',
  },
  {
    id: '20',
    correct: 'B',
    explanation: '参考PMBOK146，系统交互图从业务角度，将所开发的项目与组织内部其他系统、人进行交互来获得系统应该满足什么需求。',
  },
  {
    id: '21',
    correct: 'B',
    explanation: '参考PMBOK147，原型法是一个重要的收集需求的技术，在瀑布和敏捷中都非常常见，用户故事是引导的一种技术，多用于敏捷项目中。',
  },
  {
    id: '22',
    correct: 'A',
    explanation: '参考PMBOK148，需求文件记录了单个需要的信息，并把这些需求分为业务需求、相关方需求、解决方案需求、过渡和就绪需求、项目需求、质量需求，其中解决方案需求是为了满足业务需求和相关方需求，产品、服务或成果必须具备的特性、功能和特征。在学习需求分类时，需要充分区别和理解不同类型需求的意义。',
  },
  {
    id: '23',
    correct: 'C',
    explanation: '参考PMBOK148。A中并不是要跟踪每个需求，有些需求可能最终不能关联到业务或项目目标上，就会被丢弃。B的解释是需求文件应该做的。D中是定义范围的工作，而且也并不完整。',
  },
  {
    id: '24',
    correct: 'A',
    explanation: '参考PMBOK151，定义范围是从需求文件中选取最终项目需求的过程。',
  },
  {
    id: '25',
    correct: 'A',
    explanation: '参考PMBOK153，组织系统不是产品分解的技术。产品分析技术包括:产品分解、需求分析、系统分析、系统工程、价值分析、价值工程等。',
  },
  {
    id: '26',
    correct: 'B',
    explanation: '参考PMBOK154，范围基准是创建WBS的输出。项目范围说明书包括:产品范围描述、可交付成果、验收标准、项目除外责任。(也包括假设条件和制约因素等，这些又单独放到假设日志中记录)',
  },
  {
    id: '27',
    correct: 'C',
    explanation: '参考PMBOK158，在创建WBS的过程中，根据PMBOK中提供的建议，可以依次按照A—B—自上而下逐层细化分解—C—D的顺序完成创建过程。',
  },
  {
    id: '28',
    correct: 'C',
    explanation: '参考PMBOK160，敏捷项目中将史诗故事(大故事)分解为用户故事(有明确且独立功能的故事)，一系列用户故事构成未完项，但用户故事不等于未完项。',
  },
  {
    id: '29',
    correct: 'B',
    explanation: '参考PMBOK161，范围基准包括:项目范围说明书、WBS、WBS词典、工作包和规划包，每个术语在范围基准中有明确解释。控制账户下可以有一个或多个工作包，控制账户下有一个或多个规划包。规划包是工作内容已知但是具体的构成活动未知，而工作包是工作内容已知，具体的构成活动也明确。当规划包进一步确认了活动内容后，就成了工作包。',
  },
  {
    id: '30',
    correct: 'C',
    explanation: '参考PMBOK163，需要特别注意的是，结束项目或阶段是在确认范围(即验收了已完成的可交付成果)后进行的行政管理工作，而不是在结束项目或阶段来验收可交付成果。确认范围从工作内容的完成度上客观的给出了完成结果，同时通过确认可交付成果的完成，来提高最终产品、服务或成果验收的可能性。控制质量则从技术和合规性上提供了能否验收的标准。',
  },
  {
    id: '31',
    correct: 'B',
    explanation: '参考PMBOK163，“正式验收已完成的项目可交付成果”是确认范围过程，确认范围过程的输入(依据/支持条件)包括:项目管理计划、项目文件、核实的可交付成果、工作绩效数据等。考试过程中题目的描述会很灵活，但是都是围绕PMBOK中的输入、工具与技术、输出展开。',
  },
  {
    id: '32',
    correct: 'C',
    explanation: '参考PMBOK164，控制质量在确认范围的前面开展，也可以同时开展。本质上要先提供经过核实的可交付成果，然后再输出确认的可交付成果。每个知识领域之间都是错综复杂的交互在一起，并非没有关系。',
  },
  {
    id: '33',
    correct: 'A',
    explanation: '参考PMBOK166，确认范围过程包括两个工具与技术:检查和决策。本题考了确认范围的工具与技术。',
  },
  {
    id: '34',
    correct: 'D',
    explanation: '参考PMBOK166，D中的核实可交付成果不是一个过程，而是控制质量的输出。其他三个都是需要在本过程进行的工作。',
  },
  {
    id: '35',
    correct: 'B',
    explanation: '参考PMBOK168.这是范围蔓延的具体解释，范围蔓延可能导致“镀金”，即做了不该做的事情。',
  },
  {
    id: '36',
    correct: 'B',
    explanation: '参考PMBOK169，由于项目管理计划和项目文件各自包括了很多子组件，考试中一般不会考核项目管理计划内部子计划的对比，因为根据PMBOK中“不限于此”的要求，一个过程的输入或输出可能包括项目管理计划和项目文件中的其他更多组件。但是考生必须清楚的区别项目管理计划和项目文件之间的区别。在一些差异化特别明显的地方，也需要考虑项目管理计划或项目文件组件的不同。',
  },
  {
    id: '37',
    correct: 'B',
    explanation: '参考PMBOK170，在整个PMBOK第六版中，将大多数工具与技术被分类为数据收集、数据分析、数据表现等形式，考生应该能够清楚各个不同数据XX都包括哪些内容。PMBOK无“数据管理”的说法。',
  },
  {
    id: '38',
    correct: 'C',
    explanation: '参考PMBOK156，WBS可以通过自下而上的方式来进行，当项目团队对工作内容比较熟悉时，可以先将需要做的具体活动组织起来(底层执行活动)，然后再汇总成工作包，然后通过工作包汇总到控制账户，从而实现自下而上的组织方式。',
  },
  {
    id: '39',
    correct: 'D',
    explanation: '参考PMBOK中假设日志的定义，从指定项目章程开始，团队就开始建立并更新假设日志，其中记录了假设条件和制约因素，假设虽然是未来事件，但是项目团队必须认为其是真实要发生的，虽然不一定会发生。',
  },
  {
    id: '40',
    correct: 'C',
    explanation: '参考PMBOK137，范围说明书描述了如何定义、制定、监督、控制和确认项目范围的内容。',
  },
];

const chapter5 = {
  id: 'chapter5',
  title: '第五章:项目范围管理',
  questions,
  answers,
};

export default chapter5;