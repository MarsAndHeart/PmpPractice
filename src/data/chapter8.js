/**
 * Created by jianghai on 2018/10/20.
 */

const questions = [
  {
    id: '1',
    title: '项目质量管理过程包括',
    options: {
      A: '规划质量管理、管理质量、监督质量',
      B: '规划质量管理、管理质量、控制质量',
      C: '规划质量管理、质量保证、控制质量',
      D: '规划质量管理、质量保证、监督质量',
    },
  },
  {
    id: '2',
    title: '关于项目质量管理的核心概念，说法正确的是',
    options: {
      A: '项目质量管理关注项目过程管理，而不关注交付成果质量',
      B: '项目质量管理针对不同的行业有不同的管理',
      C: '质量测量方法和技术针对所有项目可交付成果的定义都是一样的',
      D: '质量测量方法和技术针对不同项目可交付成果有不同定义',
    },
  },
  {
    id: '3',
    title: '关于“质量”与“等级”的说法，错误的是',
    options: {
      A: '一个低等级的产品，未必是低质量的',
      B: '一个低质量的产品，未必是低等级的',
      C: '质量是一系列内在特性满足要求的程度',
      D: '等级是符合标准且适合使用',
    },
  },
  {
    id: '4',
    title: '组织针对项目或职能进行的质量管理水平最高的层级是',
    options: {
      A: '通过质量保证检查并纠正过程本身，而不仅仅是特殊缺陷',
      B: '将质量融入项目和产品的规划与设计中',
      C: '在整个组织内创建一种关注并致力于实现过程和产品质量的文化',
      D: '当错误发生时，及时对错误进行纠正',
    },
  },
  {
    id: '5',
    title: '现代质量管理的要求包括了以下所有，除了',
    options: {
      A: '让客户满意',
      B: '持续改进',
      C: '员工的责任',
      D: '与供应商互利合作关系',
    },
  },
  {
    id: '6',
    title: '关于标杆对照，说法错误的是',
    options: {
      A: '可用作规划质量管理过程的确认',
      B: '是一种常见的数据收集技术',
      C: '目的是为了持续的提高要求',
      D: '只能在同一领域进行对比',
    },
  },
  {
    id: '7',
    title: '对每个活动进行数据分析，以判断要比较其可能成本与预期效益，这是',
    options: {
      A: '质量成本',
      B: '成本效益分析',
      C: '访谈',
      D: '头脑风暴',
    },
  },
  {
    id: '8',
    title: '在投资额外的预防/评估成本时，即没有好处，又不具备成本效益，这是',
    options: {
      A: '预防成本',
      B: '评估成本',
      C: '失败成本',
      D: '最优成本',
    },
  },
  {
    id: '9',
    title: '对产品进行的破坏性试验损失进行的投入，是一种',
    options: {
      A: '一致性成本',
      B: '不一致成本',
      C: '沉没成本',
      D: '决策',
    },
  },
  {
    id: '10',
    title: '项目经理希望了解和估算一个过程的质量成本，她可以借助',
    options: {
      A: '因果图',
      B: '控制图',
      C: '流程图',
      D: '矩阵图',
    },
  },
  {
    id: '11',
    title: '为了更好的识别数据完整性和一些质量方面的问题，项目组请求组织质量部门提供帮助，质量部门把公司相关数据进行了可视化展示，通过商业语言进行描述(非技术语言)，以便让项目团队更直观的理解，质量管理部门正在采用',
    options: {
      A: '思维导图',
      B: '逻辑数据模型',
      C: '矩阵图',
      D: '决策',
    },
  },
  {
    id: '12',
    title: '项目团队通过多个比较因素，展示各因素、原因和目标之间的关系强弱，以便识别出对项目成功至关重要的质量测量指标，团队正在使用',
    options: {
      A: '思维导图',
      B: '逻辑数据模型',
      C: '矩阵图',
      D: '决策',
    },
  },
  {
    id: '13',
    title: '谁对项目的质量管理负最终责任',
    options: {
      A: '项目工程师',
      B: '质量经理',
      C: '项目经理',
      D: '团队成员',
    },
  },
  {
    id: '14',
    title: '管理质量的依据是',
    options: {
      A: '质量管理计划',
      B: '变更请求',
      C: '质量报告',
      D: '测试与评估文件',
    },
  },
  {
    id: '15',
    title: '关于“质量保证”和“管理质量”，哪个说法正确',
    options: {
      A: '两个概念是相同的',
      B: '质量保证包括了管理质量',
      C: '管理质量包括了质量保证',
      D: '管理质量包括了质量成本中的所有工作',
    },
  },
  {
    id: '16',
    title: '基于适应型和预测型生命周期的项目，管理质量的特征是',
    options: {
      A: '适应型由特定人员进行管理',
      B: '预测型由全体人员共同管理',
      C: '适应型由全体人员共同管理',
      D: '预测型由项目经理一个人管理',
    },
  },
  {
    id: '17',
    title: '管理质量过程经常采用的数据收集技术包括',
    options: {
      A: '亲和图',
      B: '核对单',
      C: '因果图',
      D: '散点图',
    },
  },
  {
    id: '18',
    title: '为了能够进一步识别管理质量过程的改进机会，同时检查管理质量期间遇到的问题、制约因素，以及非增值活动，项目组应该采用哪种工具来识别',
    options: {
      A: '备选方案分析',
      B: '过程分析',
      C: '文件分析',
      D: '根本原因分析',
    },
  },
  {
    id: '19',
    title: '因果图和以下哪个技术的本质是一样的',
    options: {
      A: '亲和图',
      B: '根本原因分析',
      C: '矩阵图',
      D: '决策',
    },
  },
  {
    id: '20',
    title: '项目经理怀疑可交付成果的缺陷率跟某个因素有关，可以借助哪个工具确认他的怀疑',
    options: {
      A: '流程图',
      B: '直方图',
      C: '矩阵图',
      D: '散点图',
    },
  },
  {
    id: '21',
    title: '项目执行期间一个可交付成果出现了大量的问题，为了找到主要问题，以便项目组抓到重点问题，项目经理应该推荐使用',
    options: {
      A: '因果图',
      B: '散点图',
      C: '直方图',
      D: '流程图',
    },
  },
  {
    id: '22',
    title: '通常可以借助哪个质量管理工具来确认工作分解结构，帮助开展WBS的创建',
    options: {
      A: '亲和图',
      B: '因果图',
      C: '直方图',
      D: '散点图',
    },
  },
  {
    id: '23',
    title: '哪个是对质量审计正确的描述',
    options: {
      A: '质量审计是规划质量管理过程的工具与技术',
      B: '质量审计是控制质量过程的工具与技术',
      C: '质量审计是管理质量过程的工具与技术',
      D: '质量审计是改进质量过程的工具与技术',
    },
  },
  {
    id: '24',
    title: '旨在优化设计过程中的特定方面，并实现对最终产品特性的提高和控制，可以通过哪个技术来实现',
    options: {
      A: '问题解决',
      B: '面向X的设计',
      C: '质量审计',
      D: '测试',
    },
  },
  {
    id: '25',
    title: '项目执行期间可能会碰到各种问题，管理质量借助问题解决技术来发现并解决问题，或应对挑战的解决方案，在定义完问题后，应该',
    options: {
      A: '识别根本原因',
      B: '生成可能的解决方案',
      C: '选择最佳解决方案',
      D: '执行解决方案',
    },
  },
  {
    id: '26',
    title: 'PDCA和六西格玛常用于',
    options: {
      A: '规划质量管理',
      B: '质量控制',
      C: '质量改进',
      D: '质量报告',
    },
  },
  {
    id: '27',
    title: '管理质量过程的输出不包括',
    options: {
      A: '质量报告',
      B: '测试与评估文件',
      C: '变革请求',
      D: '工作绩效信息',
    },
  },
  {
    id: '28',
    title: '控制质量过程的依据是',
    options: {
      A: '项目章程',
      B: '协议',
      C: '可交付成果',
      D: '工作绩效信息',
    },
  },
  {
    id: '29',
    title: '通过把需要关注的各种事项进行合理排序，以便有效的收集关于潜在质量问题的有用数据，这是一个',
    options: {
      A: '核对单',
      B: '计数表',
      C: '统计抽样',
      D: '问卷调查',
    },
  },
  {
    id: '30',
    title: '统计抽样包括属性抽样和变量抽样，以下说法都正确，除了',
    options: {
      A: '如果检查者关心的只是产品质量合格或不合格，应该使用属性抽样',
      B: '如果检查者关心产品质量在多大程度上合格，应该使用变量抽样',
      C: '属性抽样的结果为合格或不合格，变量抽样的结果为在连续量表上实际所处的位置',
      D: '变量抽样和属性抽样之间没有任何关系',
    },
  },
  {
    id: '31',
    title: '检验工作产品，以确定是否符合书面标准，这是',
    options: {
      A: '检查',
      B: '预防',
      C: '评估',
      D: '补救',
    },
  },
  {
    id: '32',
    title: '一位相关方想要知道某个过程是否受控，是否稳定，应该给她看',
    options: {
      A: '因果图',
      B: '控制图',
      C: '直方图',
      D: '散点图',
    },
  },
  {
    id: '33',
    title: '经过检查，并被确认为正确的可交付成果，是',
    options: {
      A: '完成的可交付成果',
      B: '核实的可交付成果',
      C: '验收的可交付成果',
      D: '移交的可交付成果',
    },
  },
  {
    id: '34',
    title: '六西格玛追求的目标是，每100万个机会当中，只有多少个缺陷',
    options: {
      A: '3.4',
      B: '6.8',
      C: '1.7',
      D: '0.9',
    },
  },
  {
    id: '35',
    title: '当一个过程被认为失控时，你首先应该',
    options: {
      A: '调整过程',
      B: '纠正产品、并找出办法消灭原因',
      C: '寻找特殊原因',
      D: '寻找特殊原因，如果产品超出规格限制，则纠正产品',
    },
  },
  {
    id: '36',
    title: '正确的开展质量审计，有助于',
    options: {
      A: '项目的产品将具有适用性，并满足安全标准',
      B: '不必要遵守所适用的法律和标准',
      C: '使纠正措施持续在项目过程中实施',
      D: '无需识别质量改进',
    },
  },
  {
    id: '37',
    title: '如果由于缺少员工培训和恰当的生产控制而必须返工，那么多少返工成本可以直接归因于生产线上的员工',
    options: {
      A: '约15%',
      B: '约50%',
      C: '100%',
      D: '没有',
    },
  },
  {
    id: '38',
    title: '质量报告的形式可以是',
    options: {
      A: '图形',
      B: '数字',
      C: '文件',
      D: '以上都是',
    },
  },
  {
    id: '39',
    title: '控制质量过程的输出是',
    options: {
      A: '变更请求',
      B: '批准的变更请求',
      C: '工作绩效数据',
      D: '事业环境因素',
    },
  },
  {
    id: '40',
    title: '你所在的公司是一个全球跨国企业，公司刚刚面对全体员工发布了一个关于“项目管理质量标准”文件，为了能够快速有效的征求大家对“标准”的反馈意见，你应该采用哪个工具来获得反馈',
    options: {
      A: '访谈',
      B: '引导',
      C: '问卷调查',
      D: '测试/评估',
    },
  },
];

const answers = [
  {
    id: '1',
    correct: 'B',
    explanation: '参考PMBOK271，从PMBOK第六版开始，项目质量管理将实施质量保证更改为管理质量，其内容和定义更加全面的描述了在执行构成中对质量的管理要求。',
  },
  {
    id: '2',
    correct: 'D',
    explanation: '参考PMBOK273.项目质量管理针对过程和可交付成果两个维度，从管理的角度，任何类型的项目都需要过程和交付成果两个层面的质量管理。从质量测量技术角度，不同的交付成果会有不同的测量要求。',
  },
  {
    id: '3',
    correct: 'D',
    explanation: '参考PMBOK274，D仍然是对质量的一个描述，不属于等级，其他描述都是正确的。答案选错误的。',
  },
  {
    id: '4',
    correct: 'C',
    explanation: '参考PMBOK275.描述了五个质量管理发展水平。',
  },
  {
    id: '5',
    correct: 'C',
    explanation: '参考PMBOK275，应该是管理层的责任，而不是员工，管理层需要承担85%的责任。',
  },
  {
    id: '6',
    correct: 'D',
    explanation: '参考PMBOK281，标杆对照可以在从各种不同的角度进行对比，全局或局部，同行业或跨行业等。',
  },
  {
    id: '7',
    correct: 'B',
    explanation: '参考PMBOK282.成本效益分析在多个地方使用，属于数据分析技术，是用来评估备选方案优势和劣势的财务分析工具，以确定可以创造最佳效益的备选方案。',
  },
  {
    id: '8',
    correct: 'D',
    explanation: '参考PMBOK282.对最优成本的定义。大家需要理解这个概念和用意。',
  },
  {
    id: '9',
    correct: 'A',
    explanation: '参考PMBOK283，属于一致性成本的事例。',
  },
  {
    id: '10',
    correct: 'C',
    explanation: '参考PMBOK284，这是对流程表描述中的原话。PMP考试就是抓住某个一句话描述，展开提问，所以务必看清PMBOK上的每句话。',
  },
  {
    id: '11',
    correct: 'B',
    explanation: '参考PMBOK284.对逻辑数据模型的具体描述。',
  },
  {
    id: '12',
    correct: 'C',
    explanation: '参考PMBOK284，PMBOK中的原话。',
  },
  {
    id: '13',
    correct: 'C',
    explanation: '参考PMBOK管理层的责任，项目经理本身对项目负责，就必须对项目的质量也要负责。',
  },
  {
    id: '14',
    correct: 'A',
    explanation: '参考PMBOK288，考核的是管理质量的输入，BCD都是管理质量的输出。',
  },
  {
    id: '15',
    correct: 'C',
    explanation: '参考PMBOK289，D的错误在于管理质量是质量成本中一致性工作的体现，不包括不一致性成本。',
  },
  {
    id: '16',
    correct: 'C',
    explanation: '参考PMBOK290，适应型/敏捷项目中，由于团队是自组织自我管理，所以敏捷团队共同负责质量，他们更像是全才，而非专才。',
  },
  {
    id: '17',
    correct: 'B',
    explanation: '参考PMBOK292，其他都是数据表现的形式。常见的数据收集、数据分析、数据表现应该能够识别出来。',
  },
  {
    id: '18',
    correct: 'B',
    explanation: '参考PMBOK292，是过程分析的详细说明。',
  },
  {
    id: '19',
    correct: 'B',
    explanation: '参考PMBOK293.都是探寻根本原因的方法，即都是通过why-why分析来获取根本原因，并最终解决问题。',
  },
  {
    id: '20',
    correct: 'D',
    explanation: '参考PMBOK293，通过两个变量之间的关系变化，来分析因变量和自变量之间的因素关系。',
  },
  {
    id: '21',
    correct: 'C',
    explanation: '参考PMBOK293，通过条形的多少(高低)来暴露主要问题可交付成果的缺陷、数量成因，并排序，以便能够找到影响最大的那个。',
  },
  {
    id: '22',
    correct: 'A',
    explanation: '参考PMBOK293，对相似或潜在成因进行分类，展示可归为一类(或关注)的领域，在收集需求过程就使用了亲和图的方法。',
  },
  {
    id: '23',
    correct: 'C',
    explanation: '参考PMBOK294，审计是管理质量过程中的工具与技术。',
  },
  {
    id: '24',
    correct: 'B',
    explanation: '参考PMBOK295，这是对面向X设计的具体描述。',
  },
  {
    id: '25',
    correct: 'A',
    explanation: '参考PMBOK295.问题解决罗列了六个步骤。',
  },
  {
    id: '26',
    correct: 'C',
    explanation: '参考PMBOK296，常用于质量改进。D选项是管理质量的输出，不是工具与技术。',
  },
  {
    id: '27',
    correct: 'D',
    explanation: '参考PMBOK296，工作绩效信息是控制质量的输出。',
  },
  {
    id: '28',
    correct: 'C',
    explanation: '参考PMBOK298，控制质量的输入(依据)是项目管理计划、项目文件、批准的变更请求、可交付成果、工作绩效数据、事业环境因素、组织过程资产。',
  },
  {
    id: '29',
    correct: 'B',
    explanation: '参考PMBOK302，这是一个核查表，也叫计数表。',
  },
  {
    id: '30',
    correct: 'D',
    explanation: '参考讲义192页，通过产品质量测量结果所在位置来判断产品质量合格情况，就是将两者紧密的结合在一起考虑的情况。',
  },
  {
    id: '31',
    correct: 'A',
    explanation: '参考PMBOK303.对检查的直接定义。',
  },
  {
    id: '32',
    correct: 'B',
    explanation: '参考PMBOK304，PMBOK第六版之前的版本对控制图的考核非常看重，虽然在第六版精简了描述，但是考生还是需要对控制度有充分的了解。',
  },
  {
    id: '33',
    correct: 'B',
    explanation: '参考PMBOK305.项目的可交付成果先通过控制质量进行检查，在技术和规格标准上没有问题了，就是核实的可交付成果，然后移交给确认范围进行工作内容的判断，如果无误，就会输出:验收的可交付成果。',
  },
  {
    id: '34',
    correct: 'A',
    explanation: '参考讲义197，这是一个常规的管理概念，应该记住。',
  },
  {
    id: '35',
    correct: 'D',
    explanation: '参考PMBOK304，规格线和控制线是不同的，控制线是项目管理团队来提醒自己的，超过了也未必就违规或不符合要求，只是警示项目组应该保持警惕。而规格线则是产品或项目过程强制要求的规范，一旦触碰就必须采取挽救措施。',
  },
  {
    id: '36',
    correct: 'C',
    explanation: '参考PMBOK294。',
  },
  {
    id: '37',
    correct: 'A',
    explanation: '参考PMBOK管理者的责任大概有85%，则员工为15%。这是一个常规管理知识。',
  },
  {
    id: '38',
    correct: 'D',
    explanation: '参考PMBOK296，本题重点考核质量报告。',
  },
  {
    id: '39',
    correct: 'A',
    explanation: '参考PMBOK298，其他均为本过程的输入。',
  },
  {
    id: '40',
    correct: 'C',
    explanation: '参考PMBOK303，对于受众群体众多，地理位置分散的信息获取，可以采用问卷调查的方式。',
  },
];

const chapter8 = {
  id: 'chapter8',
  title: '第八章:项目质量管理',
  questions,
  answers,
};

export default chapter8;