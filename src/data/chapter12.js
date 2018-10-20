/**
 * Created by jianghai on 2018/10/20.
 */

const questions = [
  {
    id: '1',
    title: '关于固定总价合同，说法正确的是',
    options: {
      A: '价格完全固定，不允许调整',
      B: '买方不需要定义自己所采购的实物资源信息',
      C: '对买方而言风险非常大',
      D: '如果工作范围发生了变化，则可以调整合同价格',
    },
  },
  {
    id: '2',
    title: '项目采购管理过程包括',
    options: {
      A: '规划采购管理、实施采购、控制采购',
      B: '规划采购管理、实施采购、结束采购',
      C: '实施采购、控制采购、结束采购',
      D: '实施采购、控制采购、结束采购',
    },
  },
  {
    id: '3',
    title: '成本补偿合同中，买方为卖方报销合同工作实施的一切可列支成本，并支付一笔费用作为卖方的',
    options: {
      A: '管理成本',
      B: '固定成本',
      C: '间接成本',
      D: '利润',
    },
  },
  {
    id: '4',
    title: '如果无法快速编制出准确的工作说明书的情况下需要采购外部资源或聘请外部人员，应该采用',
    options: {
      A: '固定总价加经济价格调整合同',
      B: '成本加激励费用合同',
      C: '成本加奖励费用合同',
      D: '工料合同',
    },
  },
  {
    id: '5',
    title: '合同类型的选择取决于风险的程度或者项目经理面临的不确定性，从买方的角度，适宜的低风险合同类型是',
    options: {
      A: '固定总价',
      B: '总价加奖励费用合同',
      C: '成本加激励费用合同',
      D: '成本加奖励费用合同',
    },
  },
  {
    id: '6',
    title: '一位项目经理正在负责的项目中有部分建筑工作，而建筑并非公司优势，他的团队有能力创建一个详细的工作说明书以及如果不能满足工作说明书可交付成果的惩罚条款，项目经理正在考虑使用哪种合同最合适，你的建议是',
    options: {
      A: '固定总价',
      B: '成本加固定费用',
      C: '成本加奖励费用',
      D: '时间和材料合同',
    },
  },
  {
    id: '7',
    title: '买方和卖方所签订的激励费用合同中，激励条款的主要目的是',
    options: {
      A: '降低买方的成本',
      B: '帮助卖方控制成本',
      C: '实现双方的共同目标',
      D: '降低卖方的风险，将风险转移给买方',
    },
  },
  {
    id: '8',
    title: '项目经理试图决定是否购买还是租用一台设备用于项目的实施，如果租，每天租金150美元。如果购买，则需要一次性支付成本2000美元，每日维护成本为50美元。这台设备在第几天的时候租用成本和购买成本相等',
    options: {
      A: '10',
      B: '15',
      C: '20',
      D: '25',
    },
  },
  {
    id: '9',
    title: '在正式采购前，供应商选择分析可以通过以下几个维度进行，哪个不是选择的方法',
    options: {
      A: '最低成本',
      B: '仅凭资质',
      C: '独有资源',
      D: '沟通方法',
    },
  },
  {
    id: '10',
    title: '项目组正在查看有关交付方法、合同支付类型、采购阶段等信息，他们正在查看',
    options: {
      A: '采购管理计划',
      B: '采购策略',
      C: '招标文件',
      D: '采购工作说明书',
    },
  },
  {
    id: '11',
    title: '招标文件的形式可以是多样的，以下都是招标文件的名称，除了',
    options: {
      A: '信息邀请书',
      B: '报价邀请书',
      C: '建议邀请书',
      D: '投标通知',
    },
  },
  {
    id: '12',
    title: '哪个文件包含关于合同所需产品或服务的详细属性',
    options: {
      A: '采购工作说明书',
      B: '项目章程',
      C: '工作分解结构',
      D: '范围管理计划',
    },
  },
  {
    id: '13',
    title: '基于服务需求的采购，将供应商提供的服务看作是一种拟采购对象，这时候所使用的文件名称常称作',
    options: {
      A: '履约文件',
      B: '工作大纲',
      C: '工作包',
      D: '工作说明书',
    },
  },
  {
    id: '14',
    title: '在规划采购管理过程中，项目经理希望考场行业情况和供应商能力，了解市场供需情况，以便合理的作出采购的安排，项目经理应该采用哪个工具与技术完成此工作',
    options: {
      A: '市场调研',
      B: '自制或外购分析',
      C: '专家判断',
      D: '供方选择分析',
    },
  },
  {
    id: '15',
    title: '规划采购管理过程的输出包括以下所有，除了',
    options: {
      A: '自制或外购决策',
      B: '独立估算',
      C: '变更请求',
      D: '选择的卖方',
    },
  },
  {
    id: '16',
    title: '项目组已经选择好了供应商，买方和卖方正式签合同是在哪个过程进行的',
    options: {
      A: '项目启动过程',
      B: '项目规划过程',
      C: '项目执行过程',
      D: '项目监控过程',
    },
  },
  {
    id: '17',
    title: '项目团队希望聘请第三方公司来设计和执行一部分项目工作，在选择供应商的时候，以下哪个工具可以确保公平',
    options: {
      A: '广告',
      B: '投标人会议',
      C: '建议书评估',
      D: '人际关系与团队技能',
    },
  },
  {
    id: '18',
    title: '项目经理准备把一个工作模块外包给了第三方合作伙伴，供应商受邀参加了会议。项目经理由委托一位专业的采购工程师充分估算了一下外包工作模块的成本，项目经理将获得',
    options: {
      A: '自制或外购决策',
      B: '独立成本估算',
      C: '供方选择',
      D: '合同',
    },
  },
  {
    id: '19',
    title: '买卖双方在合同正式签署之前，对合同的结构、各方的权利和义务、以及其他条款进行澄清，以便双方达成共识。这是指哪个技术的有效应用',
    options: {
      A: '专家判断',
      B: '投标人会议',
      C: '建议书评估',
      D: '谈判',
    },
  },
  {
    id: '20',
    title: '选定的卖方是指',
    options: {
      A: '符合要求的投标人',
      B: '最有竞争力的投标人',
      C: '价格便宜的投标人',
      D: '资质齐全的投标人',
    },
  },
  {
    id: '21',
    title: '合同一旦签署，就具有法律约束力，除非',
    options: {
      A: '一方不愿意履行',
      B: '一方没有能力为其承担的工作提供资金',
      C: '它违法了所适用的法律',
      D: '有一方宣布其无效',
    },
  },
  {
    id: '22',
    title: '当双方就所签署的合作协议发生争议时，请求的变更就成为有争议的变更或潜在的等待变更，把有争议的变更称之为',
    options: {
      A: '审查',
      B: '分析',
      C: '索赔',
      D: '审计',
    },
  },
  {
    id: '23',
    title: '哪一个不是控制采购的工具与技术',
    options: {
      A: '审计',
      B: '检查',
      C: '索赔管理',
      D: '会议',
    },
  },
  {
    id: '24',
    title: '对索赔和争议的处理，哪个顺序最好',
    options: {
      A: '谈判、仲裁、起诉',
      B: '谈判、调解、起诉',
      C: '仲裁、谈判、调解',
      D: '起诉、调解、谈判',
    },
  },
  {
    id: '25',
    title: '，供应商完成了合同指定的工作内容，但是买方称商业环境变了，他不再需要这些工作。合同应该被视为',
    options: {
      A: '完成，因为合同中规定的工作都完成了',
      B: '应予以调停，因为发生了纠纷',
      C: '应予以仲裁，因为合同违约了',
      D: '无效，因为市场发生了变化',
    },
  },
  {
    id: '26',
    title: '如果买方将以不同货币支付价款给卖方，应该采用哪种类型的合同',
    options: {
      A: '总价加激励费用合同',
      B: '总价加经济价格调整合同',
      C: '成本加固定费用合同',
      D: '成本加激励费用合同',
    },
  },
  {
    id: '27',
    title: '采用成本加激励费用合同时，目标成本是20万，目标费用是3万，最高费用是4万，最低费用1.8万，成本分摊比例是80/20，项目完工时实际成本为25万。则买方向卖方支付的激励费用及总费用应该是多少',
    options: {
      A: '3万，28万',
      B: '1.8万，26.8万',
      C: '2万，26.8万',
      D: '2万，27万',
    },
  },
  {
    id: '28',
    title: '买方已经与卖方谈成总价加激励费合同。合同目标成本为20万美元，目标利润为3万美元。目标价为23万美元、买方还谈成了27万美元的最高价与70/30的分成比率。如果卖方完成合同的实际成本为17万美元，那么买方付给卖方的利润是多少',
    options: {
      A: '21000',
      B: '35000',
      C: '39000',
      D: '51000',
    },
  },
  {
    id: '29',
    title: '一位承包商签署了一份固定金额的正式书面合同，承建一幢办公大楼。当承包商开始实地工作时，他发现实际用时与用料都要超过他在投标中包括的工时与材料，承包商告诉客户，他要么拥有更多资金，要么就拒绝完成项目，承包商可以这么做吗',
    options: {
      A: '可以，因为承包商从这个合同赚不到钱，客户应该理解，并且客户要么再付一部分费用，要么就取消合同',
      B: '不可以，合同已经签了，应该遵守承诺',
      C: '不可以，为什么之前不仔细评估',
      D: '可以，但客户有权对承包商提出违约诉讼',
    },
  },
  {
    id: '30',
    title: '你和卖方就项目变更进行了交谈，并商定了相关的技术内容。之后,卖方给你打电话,说明在要求合同管理员进行合同变更时,遇到了极端的麻烦，你最好',
    options: {
      A: '自己作出变更.',
      B: '通知项目办公室,说明需要帮助.',
      C: '与合同管理员一起,解决问题.',
      D: '与项目发起人联系,获取帮助.',
    },
  },
  {
    id: '31',
    title: '下列哪一项与实施采购过程相关',
    options: {
      A: '获取卖方答复，选择卖方并授予合同的过程',
      B: '制订项目购买决议，确定方法和识别潜在卖方的过程',
      C: '完成每个项目采购的过程',
      D: '管理采购关系，监督合同履行以及做出所需变更和更正的过程',
    },
  },
  {
    id: '32',
    title: '项目经理开始一个新项目，获得一份报告，显示在上一个项目中发生的采购失败情况。这份报告是出自',
    options: {
      A: '采购文件',
      B: '采购管理计划',
      C: '经验教训登记册',
      D: '问题日志',
    },
  },
  {
    id: '33',
    title: '那个输入将有助于监控采购过程来完成工作',
    options: {
      A: '工作绩效数据',
      B: '工作绩效信息',
      C: '工作绩效报告',
      D: '项目报告',
    },
  },
  {
    id: '34',
    title: '在敏捷项目中，项目经理发现，为了满足某个需求，需要采购大量的实物资源，项目经理希望进一步确认这个需求具体满足哪个目标，应该查看',
    options: {
      A: '需求文件',
      B: '需求跟踪矩阵',
      C: '相关方登记册',
      D: '采购管理计划',
    },
  },
  {
    id: '35',
    title: '关于结束的采购，以下说法都正确，除了',
    options: {
      A: '属于控制采购过程的输出',
      B: '结束的采购中不能再有未决索赔或发票',
      C: '项目管理团队可以在结束采购之后批准所有可交付成果',
      D: '结束采购中应该确认全部款项已经付清',
    },
  },
];

const answers = [
  {
    id: '1',
    correct: 'D',
    explanation: '参考PMBOK471，PMP考试过程中会对合同进行考核，请考生充分掌握每个合同类型和意义。',
  },
  {
    id: '2',
    correct: 'A',
    explanation: '参考PMBOK460，PMBOK第六版中项目采购管理包括三个过程:规划采购管理、实施采购、控制采购。',
  },
  {
    id: '3',
    correct: 'D',
    explanation: '参考PMBOK472.',
  },
  {
    id: '4',
    correct: 'D',
    explanation: '参考PMBOK472.工料合同兼顾了固定总价和成本补偿合同的特征。适用于无法快速编制出准确的工作说明书的情况下，来获取扩充人员、聘用外部专家、或寻求外部支持。',
  },
  {
    id: '5',
    correct: 'A',
    explanation: '参考PMBOK471，这种类型的合同工作范围稳定，买方很清楚自己需要什么，一旦合同价格谈妥，就不能再变更，如果因为卖方原因导致的增加费用，将由卖方负担。',
  },
  {
    id: '6',
    correct: 'A',
    explanation: '参考PMBOK471，工作范围能够确定，就采用固定总价合同。',
  },
  {
    id: '7',
    correct: 'C',
    explanation: '参考PMBOK463，在更先进的风险管理中，双方选择合适的合同，目的都是为了平衡双方的风险，实现目标一致。',
  },
  {
    id: '8',
    correct: 'C',
    explanation: '参考PMBOK473数据分析中，通过自制和外购分析，可以判断在第20天时达到一致。',
  },
  {
    id: '9',
    correct: 'D',
    explanation: '参考PMBOK473，在供方选择分析中，根据买方的情况，可以选择多个维度来筛选供应商，沟通方法与本题所设没有相关性。',
  },
  {
    id: '10',
    correct: 'B',
    explanation: '参考PMBOK476，采购策略中规定了项目交付方法、具有法律约束力的协议类型，以及如何在采购阶段推动采购进展。',
  },
  {
    id: '11',
    correct: 'D',
    explanation: '参考PMBOK477，招标文件是征求潜在卖方的建议书。',
  },
  {
    id: '12',
    correct: 'A',
    explanation: '参考PMBOK477。工作说明书包括了拟采购实物的规格、所需数量、质量水平、绩效数据、履约时间等属性信息。',
  },
  {
    id: '13',
    correct: 'B',
    explanation: '参考PMBOK478，工作大纲是采购工作书面书的一种，采购工作说明书一般所描述的是实物资源的采购，但购买外部服务也是一种采购行为，用工作大纲来替代采购工作说明书。工作说明书前面应该加上特定的修饰词才有明确针对性，比如项目工作说明书、范围工作说明书、采购工作说明书等。',
  },
  {
    id: '14',
    correct: 'A',
    explanation: '参考PMBOK473，市场调研属于数据收集技术。',
  },
  {
    id: '15',
    correct: 'D',
    explanation: '参考PMBOK460，选择的卖方时实施采购过程的输出。',
  },
  {
    id: '16',
    correct: 'C',
    explanation: '参考PMBOK482，实施采购签订合作协议，属于项目执行过程组。',
  },
  {
    id: '17',
    correct: 'B',
    explanation: '参考PMBOK487，投标人会议是买方和潜在卖方召开的会议，目的是确保所有潜在投标人对采购要求都清楚且一致理解，确保没有任何投标人得到特殊优待。',
  },
  {
    id: '18',
    correct: 'B',
    explanation: '参考PMBOK479，独立估算结果用来和选定的供应商信息进行比较。',
  },
  {
    id: '19',
    correct: 'D',
    explanation: '参考PMBOK488，谈判属于人际关系与团队技能中的方法，谈判时双方或多方进行的交流互动，以便澄清双方的职责或说明一些规则。有些工具与技术的使用，在特定场合下会发挥到最大效果，而在一些常规的场景中，则可能会无法辨识出到底选择哪个更适用。本题不适用于选择专家判断时，专家判断是单方面的作出断定。',
  },
  {
    id: '20',
    correct: 'B',
    explanation: '参考PMBOK488，选定的卖方是要签合同的对象，一定是综合指标得出最优竞争力的投标人。符合要求的投标人是前提，没有签署协议的也可能符合要求。价格和资质只是一个选择标准，不能成为最终的选定标准。',
  },
  {
    id: '21',
    correct: 'C',
    explanation: '参考PMBOK494，合同本身起到法律约束作用，如果确实了“法律”本身的意义，它的价值就没有了。一方不愿意履行和无力提供资金、或单方面宣布无效都是违背合同法律条款的行为，适用于合同条款。维度违背了所使用的法律以后，双方任何一方都可以不遵守。这个一般在合同中都有明确说明。',
  },
  {
    id: '22',
    correct: 'C',
    explanation: '参考PMBOK498索赔管理。索赔管理中，如果双方无法就变更或争议达成一致，一方可能向另一方发出索赔，如果无法自行解决索赔，则可能要按照合同中规定的进行替代争议解决方案处理。',
  },
  {
    id: '23',
    correct: 'D',
    explanation: '参考PMBOK460，控制采购的工具与技术包括专家判断、索赔管理、数据分析(绩效审查、挣值分析、趋势分析)、检查、审计。',
  },
  {
    id: '24',
    correct: 'B',
    explanation: '参考PMBOK498，最好的方式就是谈判，如果谈判不行，就调解(法律调解或第三方调解)，如果还不行，就按照合同条款进行起诉。',
  },
  {
    id: '25',
    correct: 'A',
    explanation: '参考PMBOK494，卖方完成了合同规定的工作，即便是外部环境发生变化，仍然是合同之外的事情，也并没有说是不可抗拒因素导致，所以其他方式都不合理。',
  },
  {
    id: '26',
    correct: 'B',
    explanation: '参考PMBOK471，如果买方以不同货币支付，或者支付周期很长，一般选择总价加经济价格调整合同。',
  },
  {
    id: '27',
    correct: 'D',
    explanation: '参考PMBOK472，计算题在PMP考试中数量不多，且都比较简单，合同中近几年考计算题也不多，考生需要了解，但不需要太深入研究。激励费用=目标激励费用+(目标成本-实际成本)*卖方分担比例=3万+(20万-25万)*20%=2万，支付总费用=实际成本+激励费用=25万+2万=27万。',
  },
  {
    id: '28',
    correct: 'C',
    explanation: '参考PMBOK471，这是一个固定总价加激励费用合同。目标成本=20W，目标利润=3W，最高限价27W，分成比例买卖双方7:3，实际成本=17W。利润=目标利润-(实际成本-目标成本)X卖方比例=3W-(17W-20W)X30%=3W+0.9W=39000.',
  },
  {
    id: '29',
    correct: 'D',
    explanation: '参考PMBOK499，承包商可以对合同内容提出异议，可以进入谈判，或协商，以及诉讼等法律程序。',
  },
  {
    id: '30',
    correct: 'C',
    explanation: '参考PMBOK499，此时应该双方共同解决此问题。',
  },
  {
    id: '31',
    correct: 'A',
    explanation: '参考PMBOK482，这是实施采购的工作。',
  },
  {
    id: '32',
    correct: 'C',
    explanation: '参考PMBOK500，属于项目文件中包括了经验教训登记册，其中记录了经验和教学信息。',
  },
  {
    id: '33',
    correct: 'A',
    explanation: '参考PMBOK492，这是监控采购过程的输入。在整个项目管理过程中的49个子过程，所有的输入、工具与技术、输出都可能成为考核重点。所以需要考生持续理解。',
  },
  {
    id: '34',
    correct: 'B',
    explanation: '参考PMBOK492，项目文件中包括的需求跟踪矩阵中，描述了每个需求和与其对应的业务目标关系。需求文件是项目采购管理各过程的输入。',
  },
  {
    id: '35',
    correct: 'C',
    explanation: '参考PMBOK499，项目管理团队应该在结束采购之前，批准所有可交付成果。',
  },
];

const chapter12 = {
  id: 'chapter12',
  title: '第十二章:项目采购管理',
  questions,
  answers,
};

export default chapter12;